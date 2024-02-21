import { PropsWithChildren, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useAuthContext } from "../auth/hooks/useAuthContext";

import { Routes } from "../routes/router";

interface ProtectedRouteProps extends PropsWithChildren {}

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { status } = useAuthContext();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
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
