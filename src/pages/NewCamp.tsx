import classes from "./NewCamp.module.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { State } from "../store/state.model";
import { useHistory } from "react-router-dom";

import { app} from "../firebase/firebase";
import File from "../utils/file";
import { log } from "console";

const Details = () => {
  const history = useHistory();
  const authorData = useSelector((state: State) => state.loginFormData);
  const initialData = {
    title: "",
    location: "",
    price: "",
    description: "",
    // image: "",
  };
  const [inputData, setInputData] = useState(initialData);
  const [imageAsFile, setImageAsFile] = useState<File>();
  const [imageAsUrl, setImageAsUrl] = useState({ imageUrl: "" });

  const getInputDataHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
console.log(e.target.value);

    setInputData({ ...inputData, [e.target.id]: e.target.value });
  };

  let storageRef:any;
  let fileRef;
  const getImageDataHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file: File = e.target.files[0];
      console.log(file);
      storageRef = app.storage().ref();
      fileRef = storageRef.child(file.name);
      if (file) {
        setImageAsFile(file);
      }
      fileRef.put(file).then(() => {
        "Uploaded file";
      });
    }
  };

  const getFormDataHandler = (e: React.MouseEvent) => {
    e.preventDefault();
    newCampDataHandler();
    // if (!imageAsFile) {
    //   console.error(`not an image, the image file is a ${typeof imageAsFile}`);
    // } else {
    //   const uploadTask = storage;
    //   const imagesRef = ref(storageRef, "images");
    //   const fileName = imageAsFile.name;
    //   const spaceRef = ref(imagesRef, fileName);
    //   const path = spaceRef.fullPath;
    //   const name = spaceRef.name;
    //   const imagesRefAgain = spaceRef.parent;
    // }
  };

  const newCampDataHandler = async () => {
    const newCampApi: any = process.env.REACT_APP_API_NEWCAMPS;
    const response = await fetch(newCampApi, {
      method: "POST",
      body: JSON.stringify({
        title: inputData.title,
        location: inputData.location,
        price: inputData.price,
        description: inputData.description,
        // image: inputData.image,
        author: authorData.email,
      }),
    });
    const data = await response.json();
    if (response.ok) {
      history.push("/campgrounds");
      // console.log(data);
    } else {
      let errorMessage: string = "Adding new camp failed!";
      console.log(errorMessage);
    }
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
