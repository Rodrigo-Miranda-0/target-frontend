import Signup from "../pages/SignupPage";
import Login from "../pages/LoginPage";
import HomePage from "../pages/HomePage";
import Dashboard from "../pages/DashboardPage";
import { ProtectedRoute } from "../utils/ProtectedRoute";

export enum Routes {
  SIGNUP = "/signup",
  LOGIN = "/login",
  DASHBOARD = "/dashboard",
}

export const routes = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: Routes.SIGNUP,
    element: <Signup />,
  },
  {
    path: Routes.LOGIN,
    element: <Login />,
  },
  {
    path: Routes.DASHBOARD,
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
  },
];
