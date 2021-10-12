export interface State {
  showLogin: boolean;
  showSignup: boolean;
  showEdit: boolean;
  showDetails: boolean;
  loginFormData: {email:string, password: string};
  isLoggedin: boolean;
  logginFromCamps:boolean;
  allCamps:CampCollection;
  allComments: CommentCollection;
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
export interface Comment{
  author: string;
  comment: string;
  campId: string;
}
export interface CommentCollection {
  [key:string]:Comment
}