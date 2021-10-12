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
export interface CampCollection {
  [key:string]:Camp
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
  [key:string]:Comment
}
export interface Comment{
  author: string;
  comment: string;
  campId: string;
}
