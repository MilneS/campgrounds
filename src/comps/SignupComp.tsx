import classes from "./SignupComp.module.css";
import pic from "../utils/LoginPic.jpeg";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
// import { useSelector } from "react-redux";
import { useState } from "react";
// import { State } from "../store/state.model";
import { useHistory } from "react-router-dom";

const SignupComp = () => {
  const history = useHistory();
  const initialData = { emailBig: "",emailSmall: "", passwordBig: "",passwordSmall: "" };
  const [inputData, setInputData] = useState(initialData);
  const [errMsg, setErrMsg] = useState();
  const [showErrMsg, setShowErrMsg] = useState(false);
  const dispatch = useDispatch();
  // const signupFormdata = useSelector((state: State) => state.signUpFormData);

  const showLoginHandler = (e: React.MouseEvent) => {
    e.preventDefault();
    dispatch({ type: "loginComp" });
  };
  const getInputDataHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputData({ ...inputData, [e.target.id]: e.currentTarget.value });
  };

  const getFormDataHandler = (e: React.MouseEvent) => {
    e.preventDefault();
    dispatch({ type: "loginFormData", payload: inputData });
    sendDataHandler();
  };

  const sendDataHandler = async () => {
    const url: any = process.env.REACT_APP_API_SIGNUP_KEY;
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: inputData.emailBig || inputData.emailSmall,
        password: inputData.passwordBig || inputData.passwordSmall,
        returnSecureToken: true,
      }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
    if (response.ok) {
      dispatch({ type: "loggedin" });
      dispatch({ type: "idToken", payload: data.idToken });
      localStorage.setItem("token", data.idToken);
      history.push("/campgrounds/camps");
      // console.log(data);
      setShowErrMsg(false);

      return data;
    } else {
      let errorMessage: any = "Authentication failed!";
      if (data && data.error && data.error.message) {
        errorMessage = data.error.message;
        setErrMsg(errorMessage);
        setShowErrMsg(true);
      }
    }
  };

  return (
    <>
        <div className={classes.bigCard}>
      <Card style={{ width: "27rem" }}>
        <Card.Img variant="top" src={pic} />
        <Card.Body>
          <Card.Title className="mb-4">
            <p className={classes.signup}>Sign up</p>
          </Card.Title>
          {showErrMsg && <p className={classes.errorMsg}>{errMsg}</p>}
          <Form>
            <Form.Group className="mb-3">
              <Form.Control
                type="email"
                id="emailBig"
                placeholder="Email"
                onChange={getInputDataHandler}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                type="password"
                id="passwordBig"
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
                className="mb-3"
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
      </div>
      <div className={classes.smallCard}>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={pic} />
        <Card.Body>
          <Card.Title className="mb-4">
            <p className={classes.signup}>Sign up</p>
          </Card.Title>
          {showErrMsg && <p className={classes.errorMsg}>{errMsg}</p>}
          <Form>
            <Form.Group className="mb-3">
              <Form.Control
                type="email"
                id="emailSmall"
                placeholder="Email"
                onChange={getInputDataHandler}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                type="password"
                id="passwordSmall"
                placeholder="Password"
                onChange={getInputDataHandler}
              />
            </Form.Group>
            <div className="d-grid gap-2">
              <Button
                onClick={getFormDataHandler}
                variant="success"
                size="sm"
                type="submit"
                className="mb-3"
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
      </div>

    </>
  );
};
export default SignupComp;
