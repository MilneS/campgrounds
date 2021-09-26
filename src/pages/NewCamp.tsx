import classes from "./NewCamp.module.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { State } from "../store/state.model";
import { useHistory } from "react-router-dom";

import { app } from "../firebase/firebase";
import File from "../utils/file";

const Details = () => {
  const history = useHistory();
  const authorData = useSelector((state: State) => state.loginFormData);
  const initialData = {
    title: "",
    location: "",
    price: "",
    description: "",
  };
  const [inputData, setInputData] = useState(initialData);
  const [imageAsFile, setImageAsFile] = useState<File>();
  // const [dataKey, setDataKey] = useState<string>();
  // const [imageAsUrl, setImageAsUrl] = useState({ imageUrl: "" });

  let storageRef: any;
  let fileRef: any;

  const newCampDataHandler = async () => {
    const newCampApi: any = process.env.REACT_APP_API_NEWCAMPS;
    const response = await fetch(newCampApi, {
      method: "POST",
      body: JSON.stringify({
        title: inputData.title,
        location: inputData.location,
        price: inputData.price,
        description: inputData.description,
        author: authorData.email,
      }),
    });
    if (response.ok) {
      const data = await response.json();
      return data.name;
    } else {
      let errorMessage: string = "Adding new camp failed!";
      console.log(errorMessage);
    }
  };

  const getInputDataHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputData({ ...inputData, [e.target.id]: e.target.value });
  };

  const getImageDataHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file: File = e.target.files[0];
      if (file) {
        setImageAsFile(file);
      }
    }
  };

  const getFormDataHandler = (e: React.MouseEvent) => {
    e.preventDefault();
    newCampDataHandler().then((dataKey) => {
      if (imageAsFile && imageAsFile.name) {
        storageRef = app.storage().ref();
        imageAsFile.dataKey = dataKey;
        fileRef = storageRef.child(imageAsFile.name);
        fileRef.put(imageAsFile).then(() => {
          console.log("Uploaded file");
          console.log(imageAsFile);
          history.push("/campgrounds");
        });
      }
    });
  };

  return (
    <div className={classes.container}>
      <h1 className={classes.h1}>New CampGround</h1>
      <Form className={classes.form}>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="title">Title</Form.Label>
          <Form.Control type="text" id="title" onChange={getInputDataHandler} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="location">Location</Form.Label>
          <Form.Control
            type="text"
            id="location"
            onChange={getInputDataHandler}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="price">Campground price</Form.Label>
          <Form.Control
            type="number"
            id="price"
            onChange={getInputDataHandler}
          />
        </Form.Group>
        <Form.Group className="mb-4">
          <Form.Label htmlFor="description">Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            id="description"
            onChange={getInputDataHandler}
          />
        </Form.Group>
        <Form.Group className="mb-4">
          <Form.Control type="file" id="image" onChange={getImageDataHandler} />
        </Form.Group>
        <div className={classes.button}>
          <Button
            variant="success"
            size="lg"
            type="button"
            className="mb-3"
            onClick={getFormDataHandler}
          >
            Add campground
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default Details;
