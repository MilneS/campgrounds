import { createStore } from "redux";
import { Action } from "./action.model";
import { State } from "./state.model";

const initialState: State = {
  showLogin: true,
  showSignup: false,
  signUpFormData: {username:"", email:"", password:""},
  loginFormData: { email:"", password:""},
  isLoggedin: false,
  logginFromCamps:false,
};

const reducerFunc = (state= initialState, action:Action) => {
  if (action.type === "loginComp") {
    return { ...state, showLogin: true, showSignup: false };
  }
  if (action.type === "signupComp") {
    return { ...state, showSignup: true, showLogin: false };
  }
  if (action.type === "signupFormData") {
    return { ...state, signUpFormData: action.payload };
  }
  if (action.type === "loginFormData") {
    return { ...state, loginFormData: action.payload };
  }
  if (action.type === "loggedin") {
    return { ...state, isLoggedin:true };
  }
  if (action.type === "loggedout") {
    return { ...state, isLoggedin:false };
  }
  if (action.type === "logginFromCampsBtn") {
    return { ...state, logginFromCamps:true };
  }
  if (action.type === "logoutFromCampsBtn") {
    return { ...state, logginFromCamps:false };
  }
  return state;
};

const store = createStore(reducerFunc);

export default store;
