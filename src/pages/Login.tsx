import classes from "./Login.module.css";
import pic from "../utils/LoginPic.jpeg";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Login = () => {
  return (
    <div className={classes.cardContainer}>
    <div className={classes.card}>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={pic} />
        <Card.Body>
          <Card.Title className="mb-3">Login</Card.Title>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <div className="d-grid gap-2">
            <Button variant="success" size="lg" type="submit">
              Login
            </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </div>
    </div>
  );
};
export default Login;
