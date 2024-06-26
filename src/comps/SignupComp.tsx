import classes from "./SignupComp.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { State } from "../store/interface.model";
import pic from "../utils/LoginPic.jpeg";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { auth } from "../firebase/firebase";

const SignupComp = () => {
  const initialData = {
    email: "",
    password: "",
  };
  const [inputData, setInputData] = useState(initialData);
  const [errMsg, setErrMsg] = useState<string>();
  const [showErrMsg, setShowErrMsg] = useState<boolean>(false);
  const [validated, setValidated] = useState<boolean>(false);
  const logginFromCampsBtn: boolean = useSelector(
    (state: State) => state.logginFromCamps
  );
  const dispatch = useDispatch();
  const history = useHistory();

  // ------------------------------------------------------------------------------ FUNCS -----------------------------------------

  // --------------------------------------------------- GET ENTERRED DATA --------------
  const getInputDataHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (showErrMsg) {
      setShowErrMsg(false);
    }
    setInputData({ ...inputData, [e.target.id]: e.currentTarget.value });
  };

  // --------------------------------------------------- FETCH: POST DAATA --------------
  const sendDataHandler = async () => {
    auth
      .createUserWithEmailAndPassword(inputData.email, inputData.password)
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
        if (res.message) {
          setErrMsg(res.message);
          setShowErrMsg(true);
        }
      });
  };

  // --------------------------------------------------- FIRE - FETCH: POST DAATA --------------
  const getFormDataHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLTextAreaElement;
    if (form.checkValidity() === false) {
      e.stopPropagation();
    } else {
      sendDataHandler();
      dispatch({ type: "loginFormData", payload: inputData });
    }
    setValidated(true);
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
          <Form onSubmit={getFormDataHandler} noValidate validated={validated}>
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
