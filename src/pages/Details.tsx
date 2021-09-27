import classes from "./Details.module.css";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import LoginPic from "../utils/LoginPic.jpeg";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { State } from "../store/state.model";
import { useEffect,useState } from "react";

const Details = () => {
  const params: any = useParams();
  const allData = useSelector((state: State) => state.allCamps);


  const allCampsData = () => {
    if (Object.keys(allData).length) {
      return Object.keys(allData).map(
        (item, index) => {
          if (item === params.camp) {
            const data= allData[item];
            return(
              <div key={index}>
              <Card style={{ width: "40rem" }}>
                <Card.Img variant="top" src={LoginPic} />
                <Card.Body>
                  <Card.Title className={classes.title}>{data.title}</Card.Title>
                  <Card.Text className={classes.DescrAuthPrice}>
                  {data.description}
                  </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroupItem className={classes.location}>{data.location}</ListGroupItem>
                  <ListGroupItem className={classes.DescrAuthPrice}>
                    Submitted by {data.author}
                  </ListGroupItem>
                  <ListGroupItem className={classes.DescrAuthPrice}>
                    $Price/night: {data.price}
                  </ListGroupItem>
                </ListGroup>
              </Card>
            </div>
            )
          }
          return;
        }
        // return <CampCard key={index} item={allData[item]} dataKey={item} />;
      );
    }
  };

  // useEffect(() => {
  //   allCampsData();
  // }, [allData]);

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
