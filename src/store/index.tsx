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
    case "signupComp":
      return { ...state, showSignup: true, showLogin: false };
    case "signupFormData":
      return { ...state, signUpFormData: action.payload };
    case "loginFormData":
      return { ...state, loginFormData: action.payload };
    case "loggedin":
      return { ...state, isLoggedin: true };
    case "loggedout":
      return { ...state, isLoggedin: false };
    case "logginFromCampsBtn":
      return { ...state, logginFromCamps: true };
    case "logoutFromCampsBtn":
      return { ...state, logginFromCamps: false };
    case "setAllCamps":
      return { ...state, allCamps: action.payload };
    default:
      return state;
  }
};

const store = createStore(reducerFunc);

export default store;
