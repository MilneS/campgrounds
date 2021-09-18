import classes from "./Login.module.css";
import LoginComp from "../Comps/LoginComp";
import SignupComp from "../Comps/SignupComp";
import { useSelector} from "react-redux";
import { State } from "../store/state.model";

const Login = () => {
  const showLogin = useSelector((state:State) => state.showLogin);
  const showSignup = useSelector((state:State) => state.showSignup);
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
