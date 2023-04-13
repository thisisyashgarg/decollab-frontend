import { auth } from "@/firebase/auth";
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
  TwitterAuthProvider,
  signInWithPopup,
} from "firebase/auth";

const provider = new TwitterAuthProvider();

type AuthContextType = {
  currentUser: User | null;
  signUp: (email: string, password: string) => Promise<UserCredential>;
  twitterVerification: () => Promise<User | void>;
};

export const AuthContext = createContext<AuthContextType>({
  currentUser: null,
  signUp: () => Promise.reject(),
  twitterVerification: () => Promise.reject(),
});

export function useAuth() {
  return useContext(AuthContext);
}

export const AuthProvider = ({ children }: { children?: ReactNode }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const value = {
    currentUser,
    signUp,
    twitterVerification,
  };

  async function signUp(email: string, password: string) {
    return await createUserWithEmailAndPassword(auth, email, password);
  }

  async function twitterVerification() {
    console.log("twitter auth called");
    return await signInWithPopup(auth, provider)
      .then((result) => {
        const credential = TwitterAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        const secret = credential?.secret;
        const user = result.user;
        return user;
      })
      .catch((error) => {
        console.log("Something went wrong", error, error.message);
      });
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
