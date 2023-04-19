import { Poppins } from "next/font/google";
import "../styles/globals.css";
import type { AppProps } from "next/app";

import { useEffect, useState } from "react";
import {
  UserData,
  UserDataContext,
  defaultUserData,
} from "@/context/userDataContext";
import getUserFromJWT from "@/auth/getUserIdFromJWT";

const font = Poppins({ subsets: ["latin"], weight: "400" });

export default function App({ Component, pageProps }: AppProps) {
  const [userData, setUserData] = useState<UserData>(defaultUserData);
  console.log(userData);

  async function getUser() {
    const user = await getUserFromJWT();
    setUserData(user[0]);
  }

  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      <UserDataContext.Provider value={{ userData, setUserData }}>
        <main className={font.className}>
          <Component {...pageProps} />
        </main>
      </UserDataContext.Provider>
    </>
  );
}
