import Signup from "../pages/SignupPage";
import Login from "../pages/LoginPage";
import Dashboard from "../pages/DashboardPage";
import { ProtectedRoute } from "../utils/ProtectedRoute";

export enum Routes {
  SIGNUP = "/signup",
  LOGIN = "/login",
}

export const routes = [
  {
    path: Routes.SIGNUP,
    element: <Signup />,
  },
  {
    path: Routes.LOGIN,
    element: <Login />,
  },
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
  },
];
