import classes from "./NewCamp.module.css";
import { useState } from "react";
import { useSelector } from "react-redux";
import { initialNewDataType, State, File } from "../store/interface.model";
import { useHistory } from "react-router-dom";
import { database, storage } from "../firebase/firebase";
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
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // ------------------------------------------------------------------------------------------ FUNCS -----------------------------------------
  // ----------------- FETCH: POST NEW CAMP -----------------
  const newCampDataHandler = async () => {
    setIsLoading(true);
    const campId = `${new Date()}${
      author?.split("@")[0] ?? authorData.email.split("@")[0]
    }`;
    const { title, location, price, description } = inputData;

    database.ref(`camps/${campId}`).set({
      title,
      location,
      price,
      description,
      author: author ? author : authorData.email,
    });

    if (imageAsFile && imageAsFile.name) {
      const storageRef = storage.ref();
      storageRef
        .child(`images/${campId}`)
        .put(imageAsFile)
        .then((snapshot) => {
          history.push("/campgrounds/camps");
        });
    }
    // *** ADD ERR HANDLING ***
    //   let errorMessage: string = "Adding new camp failed!";
    //   console.log(errorMessage);
  };

  // ------------- ON CHANGE: GET INPUT VALUE ----------------
  const getInputDataHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setButtonDisabled(false);
    setInputData({ ...inputData, [e.target.id]: e.target.value });
  };

  // ------------- ON CHANGE: GET IMAGE ----------------
  const getImageDataHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file: File = e.target.files[0];
      if (file) {
        setButtonDisabled(false);
        setImageAsFile(file);
      }
    }
  };

  // ------------- ON SUBMIT: FIRE POST NEW CAMP ----------------
  const getFormDataHandler = (e: React.FormEvent) => {
    e.preventDefault();
    setButtonDisabled(true);
    const form = e.target as HTMLTextAreaElement;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    } else {
      newCampDataHandler();
    }
    setValidated(true);
  };

  const cancelHandler = () => {
    history.push("/campgrounds/camps");
  };
  // ------------------------------------------------------------- JSX -------------------------------------------------------------
  return (
    <>
      <div className={classes.container}>
        {isLoading ? (
          <div className={classes.loadingCont}><div className={classes.loading}>Loading... This takes a while...</div></div>
        ) : (
          <>
            <h1 className={classes.h1}>New CampGround</h1>
            <Form
              className={classes.form}
              noValidate
              validated={validated}
              onSubmit={getFormDataHandler}
            >
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
                  variant="success"
                  size="lg"
                  type="submit"
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
          </>
        )}
      </div>
    </>
  );
};

export default NewCamp;
