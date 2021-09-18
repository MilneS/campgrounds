import { createStore } from "redux";

const initialState: { showLogin: boolean; showSignup: boolean } = {
  showLogin: true,
  showSignup: false,
};

const reducerFunc = (state= initialState, action:any) => {
  if (action.type === "loginComp") {
    return { ...state, showLogin: true, showSignup: false };
  }
  if (action.type === "signupComp") {
    return { ...state, showSignup: true, showLogin: false };
  }
  return state;
};

const store = createStore(reducerFunc);

export default store;
