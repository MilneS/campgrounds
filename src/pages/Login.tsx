import classes from "./Login.module.css";
import LoginComp from "../Comps/LoginComp";
import SigninComp from "../Comps/SigninComp";
import { useSelector } from "react-redux";

const Login = () => {
  const showLogin = useSelector((state) => state.loggedIn);
  const showSignIn = useSelector((state) => state.signedIn);
  return (
    <div className={classes.cardContainer}>
      <div className={classes.card}>
        {showLogin && <LoginComp />}
        {showSignIn && <SigninComp />}
      </div>
    </div>
  );
};
export default Login;
