import Signup from "../pages/SignupPage";
import Login from "../pages/LoginPage";
import HomePage from "../pages/HomePage";

export enum Routes {
  SIGNUP = "/signup",
  LOGIN = "/login",
}

export const routes = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: Routes.SIGNUP,
    component: Signup,
  },
  {
    path: Routes.LOGIN,
    component: Login,
  },
];
