import classes from "./Edit.module.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { database } from "../firebase/firebase";
import { propsEdit } from "../store/interface.model";


const Edit = (props: propsEdit) => {
  const campId = props.campId;
  const campFunc = props.getCampFunc;
  const campData = props.campData;
  const defaultState = {
    title: campData.title,
    location: campData.location,
    price: campData.price,
    description: campData.description,
  };
  const [enterredData, setEnterredData] = useState(defaultState);
  const dispatch = useDispatch();

  // ------------------------------------------------------- CANCEL: REDIRECT -----------------------
  const cancelHandler = (e: React.MouseEvent) => {
    dispatch({ type: "detailsComp" });
  };

  // ------------------------------------------------------- GET ENTERRED DATA -----------------------
  const enterredDataHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEnterredData({ ...enterredData, [e.target.id]: e.target.value });
  };

  const sendUpdateHandler = (e: React.MouseEvent) => {
    let dbRef= database.ref();
    dbRef
      .child(`camps/${campId}`)
      .update({
        title: enterredData.title,
        location: enterredData.location,
        price: enterredData.price,
        description: enterredData.description,
      })
      .then(() => {
        dispatch({
          type: "updateCamp",
          payload: campId,
          payloadData: {
            title: enterredData.title,
            location: enterredData.location,
            price: enterredData.price,
            description: enterredData.description,
          },
        });

        dispatch({ type: "detailsComp" });
        campFunc();
      })
      .catch((error: Error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className={classes.container}>
        <h1 className={classes.h1}>Update CampGround</h1>
        <Form className={classes.form}>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="title">Title</Form.Label>
            <Form.Control
              type="text"
              id="title"
              defaultValue={campData.title}
              onChange={enterredDataHandler}
            />
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
    </>
  );
};

export default Edit;
