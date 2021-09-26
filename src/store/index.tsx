import { createStore } from "redux";
import { Action } from "./action.model";
import { State } from "./state.model";

const initialState: State = {
  showLogin: true,
  showSignup: false,
  signUpFormData: { username: "", email: "", password: "" },
  loginFormData: { email: "", password: "" },
  isLoggedin: true,
  logginFromCamps: false,
  allCamps: {},
};

const reducerFunc = (state = initialState, action: Action) => {
  switch (action.type) {
    case "loginComp":
      return { ...state, showLogin: true, showSignup: false };
      break;
    case "signupComp":
      return { ...state, showSignup: true, showLogin: false };
      break;
    case "signupFormData":
      return { ...state, signUpFormData: action.payload };
      break;
    case "loginFormData":
      return { ...state, loginFormData: action.payload };
      break;
    case "loggedin":
      return { ...state, isLoggedin: true };
      break;
    case "loggedout":
      return { ...state, isLoggedin: false };
      break;
    case "logginFromCampsBtn":
      return { ...state, logginFromCamps: true };
      break;
    case "logoutFromCampsBtn":
      return { ...state, logginFromCamps: false };
      break;
    case "setAllCamps":
      return { ...state, allCamps: action.payload };
      break;
    default:
      return state;
      break;
  }
};

const store = createStore(reducerFunc);

export default store;
