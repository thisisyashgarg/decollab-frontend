import { auth } from "@/auth/auth";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import {
  UserCredential,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  User,
} from "firebase/auth";

type AuthContextType = {
  currentUser: User | null;
  signUp: (email: string, password: string) => Promise<UserCredential>;
};

export const AuthContext = createContext<AuthContextType>({
  currentUser: null,
  signUp: () => Promise.reject(),
});

export function useAuth() {
  return useContext(AuthContext);
}

export const AuthProvider = ({ children }: { children?: ReactNode }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const value = {
    currentUser,
    signUp,
  };

  function signUp(email: string, password: string) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function twitterAuth(username: string) {
    return;
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
