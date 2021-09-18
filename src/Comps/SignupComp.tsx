import classes from "./SignupComp.module.css";
import pic from "../utils/LoginPic.jpeg";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";

const SignupComp = () => {
  const dispatch = useDispatch();

  const showLoginFunc = (e: React.MouseEvent) => {
    e.preventDefault();
    dispatch({ type: "loginComp" });
  };

  return (
    <>
      <Card style={{ width: "27rem"}}>
        <Card.Img variant="top" src={pic}/>
        <Card.Body>
          <Card.Title className="mb-4"><p className={classes.signup}>Sign up</p></Card.Title>
          <Form>
          <Form.Group className="mb-4" controlId="formBasicEmail">
              <Form.Control type="text" placeholder="Username" />
            </Form.Group>
            <Form.Group className="mb-4" controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Email" />
            </Form.Group>
            <Form.Group className="mb-4" controlId="formBasicPassword">
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <div className="d-grid gap-2">
            <Button variant="success" size="lg" type="submit" className="mb-4">
              Sign up
            </Button>
            </div>
          </Form>
          <p className={classes.login} onClick={showLoginFunc}>
            Or login.
          </p>
        </Card.Body>
      </Card>
      </>
  );
};
export default SignupComp;
