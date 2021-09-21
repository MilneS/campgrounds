import classes from "./Details.module.css";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import LoginPic from "../utils/LoginPic.jpeg";

const Details = () => {
  return (
    <div className={classes.container}>
      <div>
        <Card style={{ width: "40rem" }}>
          <Card.Img variant="top" src={LoginPic} />
          <Card.Body>
            <Card.Title className={classes.title}>Card Title</Card.Title>
            <Card.Text className={classes.DescrAuthPrice}>
              Description
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem className={classes.location}>Location</ListGroupItem>
            <ListGroupItem className={classes.DescrAuthPrice}>
              Submitted by
            </ListGroupItem>
            <ListGroupItem className={classes.DescrAuthPrice}>
              $Price/night
            </ListGroupItem>
          </ListGroup>
        </Card>
      </div>
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
