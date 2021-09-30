import { createStore } from "redux";
import { Action } from "./action.model";
import { State } from "./state.model";

const initialState: State = {
  showLogin: true,
  showSignup: false,
  loginFormData: { email: "", password: "" },
  idToken: localStorage.getItem("token"),
  isLoggedin: !!localStorage.getItem("token"),
  logginFromCamps: false,
  allCamps: {},
  allImages: {},
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
      return {
        ...state,
        isLoggedin: false,
        loginFormData: { email: "", password: "" },
      };
    case "logginFromCampsBtn":
      return { ...state, logginFromCamps: true };
    case "logoutFromCampsBtn":
      return { ...state, logginFromCamps: false };
    case "setAllCamps":
      return { ...state, allCamps: action.payload };
    case "setAllImages":
      return { ...state, allImages: action.payload };
    case "getToken":
      return { ...state, idToken: action.payload };
    default:
      return state;
  }
};

const store = createStore(reducerFunc);

export default store;
