import { createStore } from "redux";
import { Action } from "./action.model";
import { State } from "./state.model";

const initialState: State = {
  showLogin: true,
  showSignup: false,
  signUpFormData: {username:"", email:"", password:""},
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
  return state;
};

const store = createStore(reducerFunc);

export default store;
