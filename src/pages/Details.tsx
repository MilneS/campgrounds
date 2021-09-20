import classes from "./Details.module.css";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import LoginPic from '../utils/LoginPic.jpeg'

const Details = () => {
  return (
    <div className={classes.container}>
        <Card style={{ width: "40rem" }} className={classes.card}>
        <Card.Img variant="top" src={LoginPic} />
          <Card.Body>
            <Card.Title className={classes.title}>Card Title</Card.Title>
            <Card.Text className={classes.DescrAuthPrice}>
              Description
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem className={classes.location}>Location</ListGroupItem>
            <ListGroupItem className={classes.DescrAuthPrice}>Submitted by</ListGroupItem>
            <ListGroupItem className={classes.DescrAuthPrice}>$Price/night</ListGroupItem>
          </ListGroup>
        </Card>
    </div>
  );
};

export default Details;
