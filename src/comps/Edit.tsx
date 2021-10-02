import classes from "./Edit.module.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { app } from "../firebase/firebase";

const Edit = (props: any) => {
  const dispatch = useDispatch();
  const campData = props.campData;
  const campId = props.campId;

  const cancelHandler = (e: React.MouseEvent) => {
    dispatch({ type: "detailsComp" });
  };

  const defaultState = {
    title: campData.title,
    location: campData.location,
    price: campData.price,
    description: campData.description,
  };
  const [enterredData, setEnterredData] = useState(defaultState);
  const enterredDataHandler=(e: React.ChangeEvent<HTMLInputElement>)=>{
    setEnterredData({ ...enterredData, [e.target.id]: e.target.value })
  }

  let dbRef: any;
  const sendUpdateHandler = (e: React.MouseEvent) => {
    dbRef = app.database().ref();
    dbRef.child(`campgrounds/${campId}`).update({title: enterredData.title,
      location: enterredData.location,
      price: enterredData.price,
      description: enterredData.description})
      .then(() => {
        dispatch({ type: "detailsComp" });
      })
      .catch((error: any) => {
        console.log(error);
      });
  };

  return (
    <>
    <div className={classes.containerBig}>
      <h1 className={classes.h1}>Update CampGround</h1>
      <Form className={classes.form}>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="title">Title</Form.Label>
          <Form.Control type="text" id="title" defaultValue={campData.title} onChange={enterredDataHandler}/>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="location">Location</Form.Label>
          <Form.Control
            type="text"
            id="location"
            defaultValue={campData.location}
            onChange={enterredDataHandler}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="price">Campground price</Form.Label>
          <Form.Control
            type="number"
            id="price"
            defaultValue={campData.price}
            onChange={enterredDataHandler}
          />
        </Form.Group>
        <Form.Group className="mb-4">
          <Form.Label htmlFor="description">Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            id="description"
            defaultValue={campData.description}
            onChange={enterredDataHandler}
          />
        </Form.Group>
        <div className={classes.button}>
          <Button
            onClick={sendUpdateHandler}
            variant="success"
            size="lg"
            type="button"
            className="mb-3"
          >
            Update
          </Button>
          <Button
            onClick={cancelHandler}
            variant="secondary"
            size="lg"
            type="button"
            className="mb-3"
          >
            Cancel
          </Button>
        </div>
      </Form>
    </div>
    <div className={classes.containerSmall}>
      <h2 className={classes.h2}>Update CampGround</h2>
      <Form className={classes.form}>
        <Form.Group className="mb-2">
          <Form.Label htmlFor="title">Title</Form.Label>
          <Form.Control type="text" id="title" defaultValue={campData.title} onChange={enterredDataHandler}/>
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label htmlFor="location">Location</Form.Label>
          <Form.Control
            type="text"
            id="location"
            defaultValue={campData.location}
            onChange={enterredDataHandler}
          />
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label htmlFor="price">Campground price</Form.Label>
          <Form.Control
            type="number"
            id="price"
            defaultValue={campData.price}
            onChange={enterredDataHandler}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="description">Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            id="description"
            defaultValue={campData.description}
            onChange={enterredDataHandler}
          />
        </Form.Group>
        <div className={classes.button}>
          <Button
            onClick={sendUpdateHandler}
            variant="success"
            size="sm"
            type="button"
            className="mb-3"
          >
            Update
          </Button>
          <Button
            onClick={cancelHandler}
            variant="secondary"
            size="sm"
            type="button"
            className="mb-3"
          >
            Cancel
          </Button>
        </div>
      </Form>
    </div>
    </>
  );
};

export default Edit;
