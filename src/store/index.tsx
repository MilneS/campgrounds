import { createStore } from "redux";

const initialState: { login: boolean; signup: boolean } = {
  login: false,
  signup: true,
};

const reducerFunc = (state= initialState, action:any) => {
  if (action.type === "loginComp") {
    return { ...state, login: true, signup: false };
  }
  if (action.type === "signupComp") {
    return { ...state, signup: true, login: false };
  }
  return state;
};

const store = createStore(reducerFunc);

export default store;
