export interface State {
  showLogin: boolean;
  showSignup: boolean;
  signUpFormData: {username:string, email:string, password: string};
  loginFormData: {email:string, password: string};
  isLoggedin: boolean;

}
