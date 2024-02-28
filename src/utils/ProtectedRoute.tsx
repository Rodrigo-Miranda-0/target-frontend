import { PropsWithChildren, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

import { Routes } from "../routes/router";
import { AuthStatus } from "../auth/context/types";

interface ProtectedRouteProps extends PropsWithChildren {}

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const [status, setStatus] = useState<AuthStatus>(AuthStatus.CHECKING);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setStatus(token ? AuthStatus.AUTHENTICATED : AuthStatus.UNAUTHENTICATED);

    const isAuthenticated = status === "authenticated";
    const isChecking = status === "checking";

    if (isAuthenticated || isChecking) {
      setLoading(false);
    }
  }, [status]);

  if (loading) {
    return <div>Checking...</div>;
  }

  const isAuthenticated = status === "authenticated";
  if (!isAuthenticated) {
    return <Navigate to={Routes.LOGIN} />;
  }

  return <>{children}</>;
};
