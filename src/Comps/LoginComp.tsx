import classes from "./LoginComp.module.css";
import pic from "../utils/LoginPic.jpeg";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import {useState} from "react";

const LoginComp = () => {
  const dispatch = useDispatch();
  const [errMsg, setErrMsg] = useState();
  const [showErrMsg, setShowErrMsg] = useState(false);
  const initialData = {email: "", password: "" };
  const [inputData, setInputData] = useState(initialData);


  const showSignupFunc = (e: React.MouseEvent) => {
    e.preventDefault();
    dispatch({ type: "signupComp" });
  };

  const getInputDataHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputData({ ...inputData, [e.target.id]: e.currentTarget.value });
    // console.log(e.currentTarget.value)
  };

  const getFormDataHandler = (e: React.MouseEvent) => {
    e.preventDefault();
    dispatch({ type: "loginFormData", payload: inputData });
    sendDataHandler();
  };


  const sendDataHandler = async () => {
    const url: any = process.env.REACT_APP_API_LOGIN_KEY;
    const response = await fetch(url, {
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
      console.log(data);
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
      <Card style={{ width: "27rem" }}>
        <Card.Img variant="top" src={pic} />
        <Card.Body>
          <Card.Title className="mb-4">
            <p className={classes.login}>Login</p>
          </Card.Title>
          {/* {showErrMsg && <p className={classes.errorMsg}>{errMsg}</p>} */}
          <Form>
            <Form.Group className="mb-4" controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Enter email" onChange={getInputDataHandler}/>
            </Form.Group>
            <Form.Group className="mb-4" controlId="formBasicPassword">
              <Form.Control type="password" placeholder="Password" onChange={getInputDataHandler}/>
            </Form.Group>
            <div className="d-grid gap-2">
              <Button
              onClick={getFormDataHandler}
                variant="success"
                size="lg"
                type="submit"
                className="mb-4"
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
