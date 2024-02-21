import { createContext } from "react";
import { AuthStatus } from "./types";

interface AuthContextProps {
  status: AuthStatus;
  setStatus: (status: AuthStatus) => void;
}

export const AuthContext = createContext<AuthContextProps>({
  status: AuthStatus.CHECKING,
  setStatus: () => {},
});
