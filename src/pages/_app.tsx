import { Poppins } from "next/font/google";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { AuthProvider } from "@/context/AuthContext";
import { useState } from "react";
import {
  UserData,
  UserDataContext,
  defaultUserData,
} from "@/context/userDataContext";

const font = Poppins({ subsets: ["latin"], weight: "400" });

export default function App({ Component, pageProps }: AppProps) {
  const [userData, setUserData] = useState<UserData>(defaultUserData);

  return (
    <>
      <UserDataContext.Provider value={{ userData, setUserData }}>
        <AuthProvider>
          <main className={font.className}>
            <Component {...pageProps} />
          </main>
        </AuthProvider>
      </UserDataContext.Provider>
    </>
  );
}
