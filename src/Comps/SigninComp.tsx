import classes from "./SigninComp.module.css";
import pic from "../utils/LoginPic.jpeg";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const SigninComp = () => {
  return (
    <>
      <Card style={{ width: "27rem"}}>
        <Card.Img variant="top" src={pic}/>
        <Card.Body>
          <Card.Title className="mb-4"><p className={classes.signin}>Sign in</p></Card.Title>
          <Form>
          <Form.Group className="mb-4" controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Username" />
            </Form.Group>
            <Form.Group className="mb-4" controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Email" />
            </Form.Group>
            <Form.Group className="mb-5" controlId="formBasicPassword">
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <div className="d-grid gap-2">
            <Button variant="success" size="lg" type="submit">
              Sign in
            </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
      </>
  );
};
export default SigninComp;
