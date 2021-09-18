import classes from "./SignupComp.module.css";
import pic from "../utils/LoginPic.jpeg";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
// import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
// import { State } from "../store/state.model";

const SignupComp = () => {
  const initialData = { username: "", email: "", password: "" };
  const [formData, setFormData] = useState(initialData);
  const dispatch = useDispatch();
  // const signupdata = useSelector((state: State) => state.signUpData);

  const showLoginFunc = (e: React.MouseEvent) => {
    e.preventDefault();
    dispatch({ type: "loginComp" });
  };
  const getFormData = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.id]: e.currentTarget.value });
    // console.log(e.currentTarget.value)
  };
  useEffect(() => {
    dispatch({ type: "signupData", payload: formData });
  }, [formData, dispatch]);

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
                onChange={getFormData}
              />
            </Form.Group>
            <Form.Group className="mb-4">
              <Form.Control
                type="email"
                id="email"
                placeholder="Email"
                onChange={getFormData}
              />
            </Form.Group>
            <Form.Group className="mb-4">
              <Form.Control
                type="password"
                id="password"
                placeholder="Password"
                onChange={getFormData}
              />
            </Form.Group>
            <div className="d-grid gap-2">
              <Button
                variant="success"
                size="lg"
                type="submit"
                className="mb-4"
              >
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
