import { createStore } from "redux";

const initialState: { loggedIn: boolean; signedIn: boolean } = {
  loggedIn: true,
  signedIn: false,
};

const reducerFunc = (state= initialState, action:any) => {
  if (action.type === "loginComp") {
    return { ...state, loggedIn: true, signedIn: false };
  }
  if (action.type === "signInComp") {
    return { ...state, signedIn: true, loggedIn: false };
  }
  return state;
};

const store = createStore(reducerFunc);

export default store;
