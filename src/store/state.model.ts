export interface State {
  showLogin: boolean;
  showSignup: boolean;
  showEdit: boolean;
  showDetails: boolean;
  loginFormData: {email:string, password: string};
  isLoggedin: boolean;
  logginFromCamps:boolean;
  allCamps:CampCollection;
  idToken:string;
  userId:string;
}
export interface Camp {
  author: string;
  description: string;
  location: string;
  price: string;
  title: string;
}
export interface CampCollection {
  [key:string]:Camp
}