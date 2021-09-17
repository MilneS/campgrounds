import classes from "./LoginComp.module.css";
import pic from "../utils/LoginPic.jpeg";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const LoginComp = () => {
  return (
    <>
      <Card style={{ width: "27rem"}}>
        <Card.Img variant="top" src={pic}/>
        <Card.Body>
          <Card.Title className="mb-4"><p className={classes.login}>Login</p></Card.Title>
          <Form>
            <Form.Group className="mb-4" controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-4" controlId="formBasicPassword">
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <div className="d-grid gap-2">
            <Button variant="success" size="lg" type="submit" className="mb-4">
              Login
            </Button>
            </div>
          </Form>
          <p className={classes.signUp}>Or Sign up here</p>
        </Card.Body>
      </Card>
    </>
  );
};
export default LoginComp;
