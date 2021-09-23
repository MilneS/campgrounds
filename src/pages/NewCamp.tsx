import classes from "./NewCamp.module.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";

const Details = () => {

  const initialData = { title: "", location: "", price: "", description:"", image: ""  };
  const [inputData, setInputData] = useState(initialData);



  const newCampHandler = async () => {
    const newCampApi: any = process.env.REACT_APP_API_NEWCAMPS;
    const response = await fetch(newCampApi, {
      method: "POST",
      body: JSON.stringify({
        e: "e",
        f: "f",
      }),
    });
    const data = await response.json();
    if (response.ok) {
      console.log(data);
    }
  };

  return (
    <div className={classes.container}>
      <h1 className={classes.h1}>New CampGround</h1>
      <Form className={classes.form}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Location</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Campground price</Form.Label>
          <Form.Control type="number" />
        </Form.Group>
        <Form.Group className="mb-4" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Form.Group controlId="formFile" className="mb-4">
          <Form.Control type="file" />
        </Form.Group>
        <div className={classes.button}>
          <Button
            variant="success"
            size="lg"
            type="button"
            className="mb-3"
            onClick={newCampHandler}
          >
            Add campground
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default Details;
