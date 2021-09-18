import classes from "./SignupComp.module.css";
import pic from "../utils/LoginPic.jpeg";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { State } from "../store/state.model";

const SignupComp = () => {
  const initialData = { username: "", email: "", password: "" };
  const [inputData, setInputData] = useState(initialData);
  const dispatch = useDispatch();
  const signupFormdata = useSelector((state: State) => state.signUpFormData);

  const showLoginHandler = (e: React.MouseEvent) => {
    e.preventDefault();
    dispatch({ type: "loginComp" });
  };
  const getInputDataHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputData({ ...inputData, [e.target.id]: e.currentTarget.value });
    // console.log(e.currentTarget.value)
  };
  const getFormDataHandler = (e: React.MouseEvent) => {
    e.preventDefault();
    dispatch({ type: "signupFormData", payload: inputData });
  };
  useEffect(() => {
    console.log(signupFormdata);
  }, [signupFormdata]);



  // const sendDataHandler


  return (
    <>
      <Card style={{ width: "27rem" }}>
        <Card.Img variant="top" src={pic} />
        <Card.Body>
          <Card.Title className="mb-4">
            <p className={classes.signup}>Sign up</p>
          </Card.Title>
          <Form>
            <Form.Group className="mb-4">
              <Form.Control
                type="text"
                id="username"
                placeholder="Username"
                onChange={getInputDataHandler}
              />
            </Form.Group>
            <Form.Group className="mb-4">
              <Form.Control
                type="email"
                id="email"
                placeholder="Email"
                onChange={getInputDataHandler}
              />
            </Form.Group>
            <Form.Group className="mb-4">
              <Form.Control
                type="password"
                id="password"
                placeholder="Password"
                onChange={getInputDataHandler}
              />
            </Form.Group>
            <div className="d-grid gap-2">
              <Button
                onClick={getFormDataHandler}
                variant="success"
                size="lg"
                type="submit"
                className="mb-4"
              >
                Sign up
              </Button>
            </div>
          </Form>
          <p className={classes.login} onClick={showLoginHandler}>
            Or login.
          </p>
        </Card.Body>
      </Card>
    </>
  );
};
export default SignupComp;
