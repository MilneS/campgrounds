import classes from "./NewCamp.module.css";
import { useState } from "react";
import { useSelector } from "react-redux";
import { initialNewDataType, State, File } from "../store/interface.model";
import { useHistory } from "react-router-dom";
import { app } from "../firebase/firebase";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const NewCamp = () => {
  // -------------------------------------------------------------------- LOCAL STORAGE
  const author: string | null = localStorage.getItem("userEmail");
  // -------------------------------------------------------------------- ROUTER
  const history = useHistory();
  // -------------------------------------------------------------------- REDUX
  const authorData = useSelector((state: State) => state.loginFormData);
  // -------------------------------------------------------------------- STATE
  const initialData = {
    title: "",
    location: "",
    price: "",
    description: "",
    author: author ? author : authorData.email,
  };
  const [inputData, setInputData] = useState<initialNewDataType>(initialData);
  const [imageAsFile, setImageAsFile] = useState<File>();
  const [validated, setValidated] = useState<boolean>(false);
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(false);

  // ------------------------------------------------------------------------------------------ FUNCS -----------------------------------------
  // ----------------- FETCH: POST NEW CAMP -----------------
  const newCampDataHandler = async () => {
    const newCampApi: string = process.env.REACT_APP_API_CAMPS || "";
    const response: Response = await fetch(newCampApi, {
      method: "POST",
      body: JSON.stringify({
        title: inputData.title,
        location: inputData.location,
        price: inputData.price,
        description: inputData.description,
        author: author ? author : authorData.email,
      }),
    });
    if (response.ok) {
      const data = await response.json();
      const dataName: string = data.name;

      return dataName;
    } else {
      let errorMessage: string = "Adding new camp failed!";
      console.log(errorMessage);
    }
  };

  // ------------- ON CHANGE: GET INPUT VALUE ----------------
  const getInputDataHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputData({ ...inputData, [e.target.id]: e.target.value });
  };

  // ------------- ON CHANGE: GET IMAGE ----------------
  const getImageDataHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file: File = e.target.files[0];
      if (file) {
        setImageAsFile(file);
      }
    }
  };

  // ------------- ON SUBMIT: FIRE POST NEW CAMP ----------------
  const getFormDataHandler = (e: React.MouseEvent) => {
    e.preventDefault();
    setButtonDisabled(true);
    newCampDataHandler().then((dataKey: string | undefined) => {
      if (imageAsFile && imageAsFile.name) {
        let storageRef: firebase.storage.Reference = app.storage().ref();
        imageAsFile.dataKey = dataKey;
        let fileRef: firebase.storage.Reference = storageRef.child(
          `images/${imageAsFile.dataKey}`
        );
        fileRef.put(imageAsFile).then(() => {
          history.push("/campgrounds/camps");
        });
      }
    });
    const form = e.target as HTMLTextAreaElement;
    if (form.checkValidity() === false) {
      e.stopPropagation();
    }
    setValidated(true);
  };

  const cancelHandler = (e: React.MouseEvent) => {
    history.push("/campgrounds/camps");
  };
  // ------------------------------------------------------------- JSX -------------------------------------------------------------
  return (
    <>
      <div className={classes.container}>
        <h1 className={classes.h1}>New CampGround</h1>
        <Form className={classes.form} noValidate validated={validated}>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="title">Title</Form.Label>
            <Form.Control
              type="text"
              id="title"
              onChange={getInputDataHandler}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="location">Location</Form.Label>
            <Form.Control
              type="text"
              id="location"
              onChange={getInputDataHandler}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="price">Campground price</Form.Label>
            <Form.Control
              type="number"
              id="price"
              onChange={getInputDataHandler}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="description">Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              id="description"
              onChange={getInputDataHandler}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              type="file"
              className={classes.file}
              id="image"
              onChange={getImageDataHandler}
              required
            />
          </Form.Group>
          <div className={classes.button}>
            <Button
              onClick={getFormDataHandler}
              variant="success"
              size="lg"
              type="button"
              className="mb-3"
              disabled={buttonDisabled}
            >
              Add campground
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

export default NewCamp;
