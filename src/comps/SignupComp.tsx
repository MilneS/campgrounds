import classes from "./SignupComp.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { State } from "../store/interface.model";
import pic from "../utils/LoginPic.jpeg";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const SignupComp = () => {
  const initialData = {
    email: "",
    password: "",
  };
  const [inputData, setInputData] = useState(initialData);
  const [errMsg, setErrMsg] = useState<string>();
  const [showErrMsg, setShowErrMsg] = useState<boolean>(false);
  const logginFromCampsBtn: boolean = useSelector(
    (state: State) => state.logginFromCamps
  );
  const dispatch = useDispatch();
  const history = useHistory();

  // ------------------------------------------------------------------------------ FUNCS -----------------------------------------

  // --------------------------------------------------- GET ENTERRED DATA --------------
  const getInputDataHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputData({ ...inputData, [e.target.id]: e.currentTarget.value });
  };

  // --------------------------------------------------- FETCH: POST DAATA --------------
  const sendDataHandler = async () => {
    const url: string = process.env.REACT_APP_API_SIGNUP_KEY || "";
    const response: Response = await fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: inputData.email,
        password: inputData.password,
        returnSecureToken: true,
      }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
    if (response.ok) {
      dispatch({ type: "loggedin" });
      dispatch({ type: "idToken", payload: data.idToken });
      localStorage.setItem("token", data.idToken);
      localStorage.setItem("userEmail", data.email);
      if (logginFromCampsBtn) {
        history.replace("/campgrounds/newcamp")
      } else {
        history.push("/campgrounds/camps");
        dispatch({ type: "logoutFromCampsBtn" });
      }
      setShowErrMsg(false);
      return data;
    } else {
      if (data && data.error && data.error.message) {
        const errorMessage: string = data.error.message;
        setErrMsg(errorMessage);
        setShowErrMsg(true);
      }
    }
  };

  // --------------------------------------------------- FIRE - FETCH: POST DAATA --------------
  const getFormDataHandler = (e: React.MouseEvent) => {
    e.preventDefault();
    dispatch({ type: "loginFormData", payload: inputData });
    sendDataHandler();
  };

  // --------------------------------------------------- SWITCH TO LOGIN COM --------------
  const showLoginHandler = (e: React.MouseEvent) => {
    e.preventDefault();
    dispatch({ type: "loginComp" });
  };

  return (
    <>
      <Card style={{ width: "27rem" }} className={classes.card}>
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
                id="email"
                placeholder="Email"
                onChange={getInputDataHandler}
              />
            </Form.Group>
            <Form.Group className="mb-3">
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
                className={classes.signupBtn}
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
