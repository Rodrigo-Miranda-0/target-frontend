import Signup from "../pages/SignupPage";

export enum Routes {
  SIGNUP = "/signup",
}

export const routes = [
  {
    path: Routes.SIGNUP,
    component: Signup,
  },
];
