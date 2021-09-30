export interface State {
  showLogin: boolean;
  showSignup: boolean;
  showEdit: boolean;
  showDetails: boolean;
  loginFormData: {email:string, password: string};
  isLoggedin: boolean;
  logginFromCamps:boolean;
  allCamps:any;
  allImages:any;
  idToken:any;
  userId:any;
}
