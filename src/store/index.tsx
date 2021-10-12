import { createStore } from "redux";
import { Action } from "./action.model";
import { State } from "./state.model";

const initialState: State = {
  showLogin: true,
  showSignup: false,
  showEdit: false,
  showDetails: true,
  loginFormData: { email: "", password: "" },
  idToken: localStorage.getItem("token") || '',
  userId: localStorage.getItem("userId")|| '',
  isLoggedin: !!localStorage.getItem("token"),
  logginFromCamps: false,
  allCamps: {},
  allComments: {},
};

const reducerFunc = (state = initialState, action: Action) => {
  switch (action.type) {
    case "loginComp":
      return { ...state, showLogin: true, showSignup: false };
    case "signupComp":
      return { ...state, showSignup: true, showLogin: false };
    case "detailsComp":
      return { ...state, showDetails: true, showEdit: false };
    case "editComp":
      return { ...state, showEdit: true, showDetails: false };
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
        loginFormData: null,
      };
    case "logginFromCampsBtn":
      return { ...state, logginFromCamps: true };
    case "logoutFromCampsBtn":
      return { ...state, logginFromCamps: false };
    case "setAllCamps":
      return { ...state, allCamps: action.payload };
    case "setAllComments":      
      return { ...state, allComments: action.payload };
    case "removeCamp":
      const newCampsState = state.allCamps;
      delete newCampsState[action.payload];
      return { ...state, allCamps: newCampsState };
    case "updateCamp":
      const updatedCampsState = state.allCamps;
      updatedCampsState[action.payload]=action.payloadData
      return { ...state, allCamps: updatedCampsState };
    case "getToken":
      return { ...state, idToken: action.payload };
    default:
      return state;
  }
};

const store = createStore(reducerFunc);

export default store;
