import classes from "./NewCamp.module.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { useSelector } from "react-redux";
import { State } from "../store/state.model";
import { useHistory } from "react-router-dom";

const Details = () => {
  const history = useHistory();
  const authorData = useSelector((state: State) => state.loginFormData);
  const initialData = {
    title: "",
    location: "",
    price: "",
    description: "",
    image: "",
  };
  const [inputData, setInputData] = useState(initialData);

  const getInputDataHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputData({ ...inputData, [e.target.id]: e.currentTarget.value });
  };

  const getFormDataHandler = (e: React.MouseEvent) => {
    e.preventDefault();
    newCampDataHandler();
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
        image: inputData.image,
        author: authorData.email,
      }),
    });
    const data = await response.json();
    if (response.ok) {
      history.push("/campgrounds");
      console.log(data);
    } else {
      let errorMessage: string = "Adding new camp failed!";
      console.log(errorMessage);
    }
  };

  return (
    <div className={classes.container}>
      <h1 className={classes.h1}>New CampGround</h1>
      <Form className={classes.form}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" id="title" onChange={getInputDataHandler} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Location</Form.Label>
          <Form.Control
            type="text"
            id="location"
            onChange={getInputDataHandler}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Campground price</Form.Label>
          <Form.Control
            type="number"
            id="price"
            onChange={getInputDataHandler}
          />
        </Form.Group>
        <Form.Group className="mb-4" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            id="description"
            onChange={getInputDataHandler}
          />
        </Form.Group>
        <Form.Group controlId="formFile" className="mb-4">
          <Form.Control type="file" id="image" onChange={getInputDataHandler} />
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
