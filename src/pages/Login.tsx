import classes from "./Login.module.css";
import LoginComp from "../Comps/LoginComp";
import SignupComp from "../Comps/SignupComp";
import { useSelector, RootStateOrAny } from "react-redux";

const Login = () => {
  const showLogin = useSelector((state: RootStateOrAny) => state.loggedIn);
  const showSignup = useSelector((state: RootStateOrAny) => state.signup);
  return (
    <div className={classes.cardContainer}>
      <div className={classes.card}>
        {showLogin && <LoginComp />}
        {showSignup && <SignupComp />}
      </div>
    </div>
  );
};
export default Login;
