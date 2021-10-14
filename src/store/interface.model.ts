// --------------------------- FIREBASE ----------------------------
export interface FbConf {
  apiKey: string;
  authDomain: string;
  databaseURL: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
  measurementId: string;
}
// --------------------------- REDUX STATES ----------------------------
export interface State {
  showLogin: boolean;
  showSignup: boolean;
  showEdit: boolean;
  showDetails: boolean;
  loginFormData: { email: string; password: string };
  isLoggedin: boolean;
  logginFromCamps: boolean;
  allCamps: CampCollection;
  idToken: string;
  userId: string;
}
// --------------------------- REDUX ACTION ----------------------------
export interface Action {
  type: string;
  payload?: any;
  payloadData?: any;
}
// --------------------------- CAMP IMAGE ----------------------------
export interface File {
  lastModified: number;
  lastModifiedDate?: any;
  dataKey?: string;
  name: string;
  size: number;
  type: string;
  arrayBuffer: any;
  slice: any;
  stream: any;
  text: any;
}

// --------------------------- CAMP DATA ----------------------------
export interface CampCollection {
  [key: string]: Camp;
}
export interface Camp {
  author: string;
  description: string;
  location: string;
  price: string;
  title: string;
  comments: CommentCollection;
}
export interface CommentCollection {
  [key: string]: Comment;
}
export interface Comment {
  author: string;
  comment: string;
  campId: string;
}
// --------------------------- PROPS ----------------------------
export interface propsCampCard{
  dataKey: string;
  item: {
    author: string;
    description: string;
    location: string;
    price: string;
    title: string;
  };
}

export interface propsEdit {
  campId: string;
  campData: {
    author: string;
    description: string;
    location: string;
    price: string;
    title: string;
  };
  getCampFunc: () => Promise<void>;
}

// --------------------------- DETAILS PAGE----------------------------
export interface paramsType {
  camp: string;
}

export interface initialDataType {
  comment: string;
  author: string;
  id: string;
}
// --------------------------- NEW CAMP PAGE----------------------------

export interface initialNewDataType {
  title: string;
  location: string;
  price: string;
  description: string;
  author: string;
}