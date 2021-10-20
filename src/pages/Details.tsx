import classes from "./Details.module.css";
import Edit from "../comps/Edit";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import {
  Camp,
  CampCollection,
  State,
  CommentCollection,
  paramsType,
  initialDataType,
} from "../store/interface.model";
import { app } from "../firebase/firebase";

const Details = () => {
  // -------------------------------------------------------------------- LOCAL STORAGE
  const author: string | null = localStorage.getItem("userEmail");
  const authorEmail: string | null = localStorage.getItem("userEmail");
  // -------------------------------------------------------------------- ROUTER
  const history = useHistory();
  const dispatch = useDispatch();
  const params: paramsType = useParams();
  // -------------------------------------------------------------------- REDUX
  const authorData = useSelector((state: State) => state.loginFormData);
  const allData: CampCollection = useSelector((state: State) => state.allCamps);
  const showEditComp: boolean = useSelector((state: State) => state.showEdit);
  const isLoggedin = useSelector((state: State) => state.isLoggedin);
  // -------------------------------------------------------------------- STATE
  const initialData = {
    comment: "",
    author: author ? author : authorData.email,
    id: "",
  };
  const defaultData = {
    author: "",
    description: "",
    location: "",
    price: "",
    title: "",
    comments: {},
  };
  const [validated, setValidated] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>("");
  const [commButtonDisabled, setCommButtonDisabled] = useState<boolean>(false);
  const [currentCampId, setCurrentCampId] = useState<string>("");
  const [allComments, setAllComments] = useState<initialDataType[]>([]);
  const [itemImage, setItemImage] = useState<string>();
  const [inputData, setInputData] = useState<initialDataType>(initialData);
  const [currentCamp, setCurrentCamp] = useState<Camp>(defaultData);

  // ------------------------------------------------------------------------------------------ FUNCS -----------------------------------------

  // ----------------- FETCH: GET CAMP -----------------
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

  // ----------------- CURR CAMP DATA + ID -----------------
  useEffect(() => {
    if (Object.keys(allData).length) {
      const campId = Object.keys(allData).find((item) => item === params.camp);
      if (campId) {
        setCurrentCamp(allData[campId]);
        setCurrentCampId(campId);
      }
    }
  }, [allData]);

  // ----------------- FETCH: GET IMAGE -----------------
  const getCampImage = () => {
    let storageRef: firebase.storage.Reference;
    let fileRef: firebase.storage.Reference;
    storageRef = app.storage().ref();
    fileRef = storageRef.child(`images/${params.camp}`);
    fileRef.getDownloadURL().then(function (url: string) {
      setItemImage(url);
    });
  };

  // ----------------- FIRE FETCH: GET CAMP + IMAGE -----------------
  useEffect(() => {
    getCamp();
    getCampImage();
  }, []);

  // ----------------- FETCH: DELETE CAMP + IMAGE -----------------
  const deleteHandler = (e: React.MouseEvent) => {
    let dbRef: firebase.database.Reference = app.database().ref();
    let storageRef: firebase.storage.Reference;
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
        console.log("error");
      });
  };

  // ----------------- SHOW EDIT COMP -----------------
  const editHandler = (e: React.MouseEvent) => {
    dispatch({ type: "editComp" });
  };

  // ---------------------------------------------------------------------------------- COMMENTS -----------------

  // ------------- ON CHANGE: GET INPUT VALUE ----------------
  const getInputDataHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputData({ ...inputData, [e.target.id]: e.target.value });
    setInputValue(e.target.value);
  };

  // ----------------- PUSH COMMENTS TO ARRAY -----------------
  useEffect(() => {
    let allComm: initialDataType[] = [];
    const comm: CommentCollection = currentCamp.comments;
    for (const key in comm) {
      const newComm = { ...comm[key], id: key };
      allComm.push(newComm);
    }
    setAllComments(allComm);
  }, [currentCamp]);

  // ----------------- FETCH: POST COMMENT -----------------
  const newCommentHandler = async () => {
    const newCommentApi: string =
      `${process.env.REACT_APP_API_COMMENTS}${currentCampId}/comments.json` ||
      "";

    if (inputData.comment.trim().length) {
      const response: Response = await fetch(newCommentApi, {
        method: "POST",
        body: JSON.stringify({
          author: author ? author : authorData.email,
          comment: inputData.comment,
        }),
      });
      if (response.ok) {
        const data = await response.json();
        getCamp();
        return data;
      } else {
        let errorMessage: string = "Adding new camp failed!";
        console.log(errorMessage);
      }
    }
  };

  // ----------------- ON SUBMIT: FIRE POST COMMENT + CLEAR INPUT -----------------
  const sendFormDataHandler = async (e: React.MouseEvent) => {
    e.preventDefault();
    setCommButtonDisabled(true);
    setInputValue("");

    await newCommentHandler();
    setInputData(initialData);
    setCommButtonDisabled(false);
    const form = e.target as HTMLTextAreaElement;
    if (form.checkValidity() === false) {
      e.stopPropagation();
    }
    setValidated(true);
  };

  // ----------------- ON CLICK: DELETE COMMENT -----------------
  const deleteCommentHandler = async (e: React.MouseEvent) => {
    let dbRef: firebase.database.Reference = app.database().ref();
    const commentId: string = e.currentTarget.id;

    await dbRef
      .child(`campgrounds/${params.camp}/comments/${commentId}`)
      .remove();
    getCamp();
  };

  // ------------------------------------------------------------- JSX -------------------------------------------------------------
  return (
    <>
      <div>
        {!showEditComp && currentCamp && (
          <div className={classes.container}>
            <div>
              {authorEmail === currentCamp.author && (
                <div>
                  {/* ---------------------------------------------------------- TOP BTN */}

                  <div className={classes.cardButtons}>
                    <Button
                      variant="primary"
                      type="button"
                      className={classes.reviewBtn}
                      size="lg"
                      onClick={editHandler}
                    >
                      Update
                    </Button>
                    <Button
                      variant="danger"
                      type="button"
                      className={classes.reviewBtn}
                      size="lg"
                      onClick={deleteHandler}
                    >
                      Delete
                    </Button>
                  </div>
                </div>
              )}
              {/* ---------------------------------------------------------- CARD */}
              <div className={classes.card}>
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
            </div>
            {/* -------------------------------------------------------------------------REVIEW */}

            <div className={classes.reviewContainer}>
              {isLoggedin && (
                <h1 className={classes.titleReview}>Leave a review</h1>
              )}
              {!isLoggedin && <h1 className={classes.titleReview}>Reviews</h1>}

              {isLoggedin && (
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
                        value={inputValue}
                        required
                      />
                    </Form.Group>
                    <Button
                      variant="success"
                      size="lg"
                      type="button"
                      className={classes.submitReviewBtn}
                      onClick={sendFormDataHandler}
                      disabled={commButtonDisabled}
                    >
                      Submit
                    </Button>
                  </Form>
                </div>
              )}
              {allComments.length <= 0 && (
                <div className={classes.NoCommentsMsg}>
                  No reviews available.
                </div>
              )}
              <div className={classes.commCont}>
                {allComments.length > 0 &&
                  allComments.map((item: initialDataType, index: number) => {
                    return (
                      <Card key={index} className={classes.reviewCard}>
                        <Card.Title className={classes.authorReview}>
                          {item.author}
                        </Card.Title>
                        <Card.Text>{item.comment}</Card.Text>
                        {authorEmail === item.author && (
                          <div>
                            <Button
                              variant="danger"
                              type="button"
                              className={classes.deleteReviewButton}
                              onClick={deleteCommentHandler}
                              id={item.id}
                            >
                              Delete
                            </Button>
                          </div>
                        )}
                      </Card>
                    );
                  })}
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
