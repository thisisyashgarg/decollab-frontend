import { Provider, createContext, useContext, useState } from "react";

const AuthContext = createContext("");

export function useAuth() {
  return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState("");
  const value = {
    currentUser,
  };
  return;
};
