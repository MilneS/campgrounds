import classes from "./Login.module.css";
import LoginComp from "../comps/LoginComp";
import SignupComp from "../comps/SignupComp";
import { useSelector } from "react-redux";
import { State } from "../store/interface.model";

const Login = () => {
  const showLogin: boolean = useSelector((state: State) => state.showLogin);
  const showSignup: boolean = useSelector((state: State) => state.showSignup);
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
