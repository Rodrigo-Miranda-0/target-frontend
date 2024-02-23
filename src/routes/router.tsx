import Signup from "../pages/SignupPage";
import Login from "../pages/LoginPage";
import Dashboard from "../pages/DashboardPage";
import Confirmation from "../pages/ConfirmationPage";
import { ProtectedRoute } from "../utils/ProtectedRoute";

export enum Routes {
  SIGNUP = "/signup",
  LOGIN = "/login",
  CONFIRMATION = "/confirmation",
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
  {
    path: Routes.CONFIRMATION,
    element: <Confirmation />,
  },
];
