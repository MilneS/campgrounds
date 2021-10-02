import classes from "./Details.module.css";
import Edit from "../comps/Edit";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { State } from "../store/state.model";
import { app } from "../firebase/firebase";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const Details = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const authorEmail: any = localStorage.getItem("userEmail");

  const params: any = useParams();
  const allData = useSelector((state: State) => state.allCamps);
  const showEditComp = useSelector((state: State) => state.showEdit);

  const [currentCamp, setCurrentCamp] = useState<any>();
  const [currentCampId, setCurrentCampId] = useState<any>();

  const getCamp = async () => {
    const allCampsApi: any = process.env.REACT_APP_API_CAMPS;
    const response = await fetch(allCampsApi, {
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
    getCamp();
    if (Object.keys(allData).length) {
      const campId = Object.keys(allData).find((item) => item === params.camp);
      if (campId) {
        setCurrentCamp(allData[campId]);
        setCurrentCampId(campId);
      }
    }
  }, [allData]);

  useEffect(() => {
    getCampDetails();
  }, []);

  const [itemImage, setItemImage] = useState();
  let storageRef: any;
  let fileRef: any;
  let dbRef: any;

  const getCampDetails = () => {
    storageRef = app.storage().ref();
    fileRef = storageRef.child(`images/${params.camp}`);
    fileRef.getDownloadURL().then(function (url: any) {
      setItemImage(url);
    });
  };

  const deleteHandler = (e: React.MouseEvent) => {
    dbRef = app.database().ref();
    storageRef = app.storage().ref();
    dbRef.child(`campgrounds/${params.camp}`).remove();
    storageRef
      .child(`images/${params.camp}`)
      .delete()
      .then(() => {
        history.replace("/campgrounds/camps");
      })
      .catch((error: any) => {
        console.log(error);
      });
  };
  const editHandler = (e: React.MouseEvent) => {
    dispatch({ type: "editComp" });
  };

  return (
    <>
      <div>
        {!showEditComp && currentCamp && (
          <div className={classes.container}>
            <div>
              {authorEmail === currentCamp.author && (
                <div className={classes.cardButtons}>
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
              <p className={classes.textareaTitle}>Review text</p>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <Button
                  variant="success"
                  size="lg"
                  type="button"
                  className="mb-5"
                >
                  Submit
                </Button>
              </Form>
              <Card className={classes.reviewCard}>
                <Card.Title>Author</Card.Title>
                <Card.Text>Review: Text</Card.Text>
                <div className={classes.reviewButton}>
                  <Button variant="danger" type="button" className="mb-1">
                    Delete
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        )}
        {showEditComp && <Edit campData={currentCamp} campId={currentCampId} />}
      </div>
    </>
  );
};

export default Details;
