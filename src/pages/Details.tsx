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
import { database, storage } from "../firebase/firebase";

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
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // ------------------------------------------------------------------------------------------ FUNCS -----------------------------------------

  // ----------------- FETCH: GET CAMP -----------------
  const getCamp = async () => {
    var starCountRef = database.ref("camps/");
    starCountRef.on("value", (snapshot) => {
      const data = snapshot.val();
      if (data) {
        dispatch({ type: "setAllCamps", payload: data });
      } else {
        let errorMessage: string = "Getting all camps failed!";
        console.log(errorMessage);
      }
    });
  };

  // ----------------- FETCH: GET IMAGE -----------------
  const getCampImage = () => {
    storage
      .ref(`images/${params.camp}`)
      .getDownloadURL()
      .then((url) => {
        setItemImage(url);
        setIsLoading(false);
      })
      .catch((error: Error) => {
        setIsLoading(false);
        console.log(
          `Getting image failed on campCard ${JSON.stringify(error.message)}`
        );
      });
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

  // ----------------- FIRE FETCH: GET CAMP + IMAGE -----------------
  useEffect(() => {
    getCamp();
    getCampImage();
  }, []);

  // ----------------- FETCH: DELETE CAMP + IMAGE -----------------
  const deleteHandler = (e: React.MouseEvent) => {
    let dbRef = database.ref();
    setIsLoading(true);
    dbRef.child(`camps/${params.camp}`).remove();
    const desertRef = storage.ref().child(`images/${params.camp}`);
    desertRef
      .delete()
      .then(() => {
        dispatch({ type: "removeCamp", payload: params.camp });
        history.replace("/campgrounds/camps");
      })
      .catch((error) => {
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
    const commentId = `${new Date()}${
      author?.split("@")[0] ?? authorData.email.split("@")[0]
    }`;
    let dbRef = database.ref();
    dbRef.child(`camps/${currentCampId}/comments/${commentId}`).update({
      author: author ? author : authorData.email,
      comment: inputData.comment,
    });
    getCamp();
  };

  // *** ADD ERROR HANDLING ***
  //     let errorMessage: string = "Adding new camp failed!";
  //     console.log(errorMessage);

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
    let dbRef = database.ref();
    const commentId: string = e.currentTarget.id;

    await dbRef.child(`camps/${params.camp}/comments/${commentId}`).remove();
    getCamp();
  };

  // ------------------------------------------------------------- JSX -------------------------------------------------------------
  return (
    <>
      {isLoading ? (
        <div className={classes.loadingCont}>
          <div className={classes.loading}>Loading...</div>
        </div>
      ) : (
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
                {!isLoggedin && (
                  <h1 className={classes.titleReview}>Reviews</h1>
                )}

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
                        type="submit"
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
      )}
    </>
  );
};

export default Details;
