import classes from "./Details.module.css";
import Edit from "../comps/Edit";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import {
  Camp,
  CampCollection,
  CommentCollection,
  State,
} from "../store/state.model";
import { app } from "../firebase/firebase";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const Details = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const authorEmail: string | null = localStorage.getItem("userEmail");

  interface paramsType {
    camp: string;
  }
  const params: paramsType = useParams();

  const allData: CampCollection = useSelector((state: State) => state.allCamps);
  const allComments: CommentCollection = useSelector(
    (state: State) => state.allComments
  );
  const showEditComp: boolean = useSelector((state: State) => state.showEdit);

  const defaultData = {
    author: "",
    description: "",
    location: "",
    price: "",
    title: "",
  };
  const [currentCamp, setCurrentCamp] = useState<Camp>(defaultData);
  const [currentCampId, setCurrentCampId] = useState<string>("");

  const getCamp = async () => {
    const allCampsApi: string = process.env.REACT_APP_API_CAMPS || "";
    const response: Response = await fetch(allCampsApi, {
      method: "GET",
    });
    if (response.ok) {
      const data = await response.json();
      dispatch({ type: "setAllCamps", payload: data });
    } else {
      let errorMessage: string = "Getting all camps failed!";
      console.log(errorMessage);
    }
  };

  useEffect(() => {
    if (Object.keys(allData).length) {
      const campId = Object.keys(allData).find((item) => item === params.camp);
      if (campId) {
        setCurrentCamp(allData[campId]);
        setCurrentCampId(campId);
      }
    }
  }, [allData]);

  useEffect(() => {
    getCamp();
    getCampImage();
  }, []);

  const [itemImage, setItemImage] = useState<string>();
  let storageRef: firebase.storage.Reference;
  let fileRef: firebase.storage.Reference;

  const getCampImage = () => {
    storageRef = app.storage().ref();
    fileRef = storageRef.child(`images/${params.camp}`);
    fileRef.getDownloadURL().then(function (url: string) {
      setItemImage(url);
    });
  };

  const deleteHandler = (e: React.MouseEvent) => {
    let dbRef: firebase.database.Reference = app.database().ref();
    storageRef = app.storage().ref();
    dbRef.child(`campgrounds/${params.camp}`).remove();
    storageRef
      .child(`images/${params.camp}`)
      .delete()
      .then(() => {
        dispatch({ type: "removeCamp", payload: params.camp });
        history.replace("/campgrounds/camps");
      })
      .catch((error: Error) => {
        console.log(error);
      });
  };
  const editHandler = (e: React.MouseEvent) => {
    dispatch({ type: "editComp" });
  };

  // -------------POST COMMENT TO FIREBASE----------------
  const author: string | null = localStorage.getItem("userEmail");
  const authorData = useSelector((state: State) => state.loginFormData);

  const initialData = {
    campId: "",
    comment: "",
    author: author ? author : authorData.email,
  };
  interface initialDataType {
    campId: string;
    comment: string;
    author: string;
  }
  const [inputData, setInputData] = useState<initialDataType>(initialData);
  const newCommentHandler = async () => {
    const newCommentApi: string = process.env.REACT_APP_API_COMMENTS || "";
    const response: Response = await fetch(newCommentApi, {
      method: "POST",
      body: JSON.stringify({
        campId: currentCampId,
        author: author ? author : authorData.email,
        comment: inputData.comment,
      }),
    });
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      let errorMessage: string = "Adding new camp failed!";
      console.log(errorMessage);
    }
  };
  const getInputDataHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputData({ ...inputData, [e.target.id]: e.target.value });
  };

  const [validated, setValidated] = useState<boolean>(false);
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(false);
  const [commentSubmitted, setCommentSubmitted] = useState<boolean>(false);

  const getFormDataHandler = async (e: React.MouseEvent) => {
    e.preventDefault();
    setButtonDisabled(true);
    await newCommentHandler();
    setCommentSubmitted(true);
    await getComments();
    setButtonDisabled(false);
    const form = e.target as HTMLTextAreaElement;
    if (form.checkValidity() === false) {
      e.stopPropagation();
    }
    setValidated(true);
  };
  // -------------GET COMMENTS FROM FIREBASE----------------
  const [allComm, setAllComm] = useState();
  const getComments = async () => {
    const allCommentsApi: string = process.env.REACT_APP_API_COMMENTS || "";
    const response: Response = await fetch(allCommentsApi, {
      method: "GET",
    });
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      setAllComm(data);
      return data;
    } else {
      let errorMessage: string = "Getting all comments failed!";
      console.log(errorMessage);
    }
  };
  useEffect(() => {
    getComments();
  }, []);

  useEffect(() => {
    console.log(allComm);
  }, [allComments]);

  // --------------------------
  return (
    <>
      <div>
        {!showEditComp && currentCamp && (
          <div className={classes.container}>
            <div>
              {authorEmail === currentCamp.author && (
                <div>
                  <div className={classes.cardButtonsBig}>
                    <Button
                      variant="primary"
                      type="button"
                      className="mb-2"
                      size="lg"
                      onClick={editHandler}
                    >
                      Update
                    </Button>
                    <Button
                      variant="danger"
                      type="button"
                      className="mb-2"
                      size="lg"
                      onClick={deleteHandler}
                    >
                      Delete
                    </Button>
                  </div>
                  <div className={classes.cardButtonsSmall}>
                    <Button
                      variant="primary"
                      type="button"
                      className="mb-2"
                      size="sm"
                      onClick={editHandler}
                    >
                      Update
                    </Button>
                    <Button
                      variant="danger"
                      type="button"
                      className="mb-2"
                      size="sm"
                      onClick={deleteHandler}
                    >
                      Delete
                    </Button>
                  </div>
                </div>
              )}
              <div className={classes.cardBig}>
                <Card style={{ width: "40rem" }}>
                  <Card.Img variant="top" src={itemImage} />
                  <Card.Body>
                    <Card.Title className={classes.title}>
                      {currentCamp.title}
                    </Card.Title>
                    <Card.Text className={classes.DescrAuthPrice}>
                      {currentCamp.description}
                    </Card.Text>
                  </Card.Body>
                  <ListGroup className="list-group-flush">
                    <ListGroupItem className={classes.location}>
                      {currentCamp.location}
                    </ListGroupItem>
                    <ListGroupItem className={classes.DescrAuthPrice}>
                      Submitted by {currentCamp.author}
                    </ListGroupItem>
                    <ListGroupItem className={classes.DescrAuthPrice}>
                      Price/night: ${currentCamp.price}
                    </ListGroupItem>
                  </ListGroup>
                </Card>
              </div>
              <div className={classes.cardMid}>
                <Card style={{ width: "30rem" }}>
                  <Card.Img variant="top" src={itemImage} />
                  <Card.Body>
                    <Card.Title className={classes.title}>
                      {currentCamp.title}
                    </Card.Title>
                    <Card.Text className={classes.DescrAuthPrice}>
                      {currentCamp.description}
                    </Card.Text>
                  </Card.Body>
                  <ListGroup className="list-group-flush">
                    <ListGroupItem className={classes.location}>
                      {currentCamp.location}
                    </ListGroupItem>
                    <ListGroupItem className={classes.DescrAuthPrice}>
                      Submitted by {currentCamp.author}
                    </ListGroupItem>
                    <ListGroupItem className={classes.DescrAuthPrice}>
                      Price/night: ${currentCamp.price}
                    </ListGroupItem>
                  </ListGroup>
                </Card>
              </div>
              <div className={classes.cardSmall}>
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={itemImage} />
                  <Card.Body>
                    <Card.Title className={classes.title}>
                      {currentCamp.title}
                    </Card.Title>
                    <Card.Text className={classes.DescrAuthPrice}>
                      {currentCamp.description}
                    </Card.Text>
                  </Card.Body>
                  <ListGroup className="list-group-flush">
                    <ListGroupItem className={classes.location}>
                      {currentCamp.location}
                    </ListGroupItem>
                    <ListGroupItem className={classes.DescrAuthPrice}>
                      Submitted by {currentCamp.author}
                    </ListGroupItem>
                    <ListGroupItem className={classes.DescrAuthPrice}>
                      Price/night: ${currentCamp.price}
                    </ListGroupItem>
                  </ListGroup>
                </Card>
              </div>
            </div>
            <div className={classes.reviewContainer}>
              <h1 className={classes.titleReview}>Leave a review</h1>
              {commentSubmitted && <div className={classes.commentMsg}>Your comment has been submitted.</div>}
              {!commentSubmitted && (
                <div>
                  <p className={classes.textareaTitle}>Review text</p>

                  <Form
                    className={classes.reviewForm}
                    noValidate
                    validated={validated}
                  >
                    <Form.Group className="mb-3">
                      <Form.Control
                        as="textarea"
                        rows={3}
                        id="comment"
                        onChange={getInputDataHandler}
                      />
                    </Form.Group>
                    <Button
                      variant="success"
                      size="lg"
                      type="button"
                      className="mb-5"
                      onClick={getFormDataHandler}
                      disabled={buttonDisabled}
                    >
                      Submit
                    </Button>
                  </Form>
                </div>
              )}
              <Card className={classes.reviewCard}>
                <Card.Title>Author</Card.Title>
                <Card.Text>Review: Text</Card.Text>
                <div className={classes.reviewButton}>
                  <Button variant="danger" type="button" className="mb-1">
                    Delete
                  </Button>
                </div>
              </Card>
              <div className={classes.warning}>
                ⚠ Comments under construction ⚠
              </div>
            </div>
          </div>
        )}
        {showEditComp && (
          <Edit
            campData={currentCamp}
            campId={currentCampId}
            getCampFunc={getCamp}
          />
        )}
      </div>
    </>
  );
};

export default Details;
