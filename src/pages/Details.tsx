import classes from "./Details.module.css";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { State } from "../store/state.model";
import { app } from "../firebase/firebase";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const Details = () => {
  const history = useHistory();
  const authorData = useSelector((state: State) => state.loginFormData);
  const params: any = useParams();
  const allData = useSelector((state: State) => state.allCamps);

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

  useEffect(() => {
    getCampDetails();
  }, []);

  const deleteHandler = (e: React.MouseEvent) => {
    dbRef = app.database().ref();
    storageRef = app.storage().ref();
    dbRef.child(`campgrounds/${params.camp}`).remove();
    storageRef
      .child(`images/${params.camp}`)
      .delete()
      .then(() => {
        history.push("/campgrounds/camps");
      })
      .catch((error: any) => {
        console.log(error);
      });
  };

  const editHandler = (e: React.MouseEvent) => {};

  const allCampsData = () => {
    if (Object.keys(allData).length) {
      return Object.keys(allData).map((item, index) => {
        if (item === params.camp) {
          const data = allData[item];
          return (
            <div key={index}>
              {authorData.email === data.author && (
                <div className={classes.cardButtons}>
                  <Button
                    variant="primary"
                    type="button"
                    className="mb-2"
                    onClick={editHandler}
                  >
                    Update
                  </Button>
                  <Button
                    variant="danger"
                    type="button"
                    className="mb-2"
                    onClick={deleteHandler}
                  >
                    Delete
                  </Button>
                </div>
              )}

              <Card style={{ width: "40rem" }}>
                <Card.Img variant="top" src={itemImage} />
                <Card.Body>
                  <Card.Title className={classes.title}>
                    {data.title}
                  </Card.Title>
                  <Card.Text className={classes.DescrAuthPrice}>
                    {data.description}
                  </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroupItem className={classes.location}>
                    {data.location}
                  </ListGroupItem>
                  <ListGroupItem className={classes.DescrAuthPrice}>
                    Submitted by {data.author}
                  </ListGroupItem>
                  <ListGroupItem className={classes.DescrAuthPrice}>
                    $Price/night: {data.price}
                  </ListGroupItem>
                </ListGroup>
              </Card>
            </div>
          );
        } else {
          return null;
        }
      });
    }
  };

  return (
    <div className={classes.container}>
      {allCampsData()}
      <div className={classes.reviewContainer}>
        <h1 className={classes.titleReview}>Leave a review</h1>
        <p className={classes.textareaTitle}>Review text</p>
        <Form>
          <Form.Group className="mb-3">
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <Button variant="success" size="lg" type="button" className="mb-5">
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
  );
};

export default Details;
