import classes from "./Login.module.css";
import LoginComp from "../Comps/LoginComp";
import SigninComp from "../Comps/SigninComp";
import { useSelector, RootStateOrAny } from "react-redux";

const Login = () => {
  const showLogin = useSelector((state: RootStateOrAny) => state.loggedIn);
  const showSignIn = useSelector((state: RootStateOrAny) => state.signedIn);
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
