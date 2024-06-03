import classes from "./LoginComp.module.css";
import pic from "../utils/LoginPic.jpeg";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { State } from "../store/interface.model";
import { auth } from "../firebase/firebase";

const LoginComp = () => {
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
  const history = useHistory();
  const dispatch = useDispatch();

  // ------------------------------------------------------------------------------------------ FUNCS -----------------------------------------

  // --------------------------------------------------- GET ENTERRED DATA --------------
  const getInputDataHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputData({ ...inputData, [e.target.id]: e.currentTarget.value });
  };

  // --------------------------------------------------- FETCH: POST DAATA --------------
  const sendDataHandler = async () => {
    auth
      .signInWithEmailAndPassword(inputData.email, inputData.password)
      .then((userCredential: any) => {
        const idToken = userCredential.user.ya;
        dispatch({ type: "loggedin" });
        dispatch({ type: "idToken", payload: idToken });
        localStorage.setItem("token", idToken);
        localStorage.setItem("userEmail", inputData.email);
        if (logginFromCampsBtn) {
          history.replace("/campgrounds/newcamp");
        } else {
          history.push("/campgrounds/camps");
          dispatch({ type: "logoutFromCampsBtn" });
        }
        setShowErrMsg(false);
        return inputData;
      })
      .catch((res) => {
        if (res && res.error && res.error.message) {
          const errorMessage: string = res.error.message;
          setErrMsg(errorMessage);
          setShowErrMsg(true);
        }
      });
  };

  // --------------------------------------------------- FIRE - FETCH: POST DAATA --------------
  const getFormDataHandler = (e: React.MouseEvent) => {
    e.preventDefault();
    dispatch({ type: "loginFormData", payload: inputData });
    sendDataHandler();
  };

  // --------------------------------------------------- SWITCH TO SIGNUP COMP --------------
  const showSignupFunc = (e: React.MouseEvent) => {
    e.preventDefault();
    dispatch({ type: "signupComp" });
  };

  return (
    <>
      <Card style={{ width: "27rem" }} className={classes.card}>
        <Card.Img variant="top" src={pic} />
        <Card.Body>
          <Card.Title className="mb-4">
            <p className={classes.login}>Login</p>
          </Card.Title>
          {showErrMsg && <p className={classes.errorMsg}>{errMsg}</p>}
          <Form>
            <Form.Group className="mb-3">
              <Form.Control
                id="email"
                type="email"
                placeholder="Enter email"
                onChange={getInputDataHandler}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                id="password"
                type="password"
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
                className={classes.loginBtn}
              >
                Login
              </Button>
            </div>
          </Form>
          <p className={classes.signUp} onClick={showSignupFunc}>
            Or sign up.
          </p>
        </Card.Body>
      </Card>
    </>
  );
};
export default LoginComp;
