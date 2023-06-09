import { Poppins } from "next/font/google";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import { UserDataContext, defaultUserData } from "@/context/userDataContext";
import getUserFromJWT from "@/lib/auth/getUserIdFromJWT";
import { useRouter } from "next/router";
import { UserData } from "@/types/types";

const font = Poppins({ subsets: ["latin"], weight: "400" });

export default function App({ Component, pageProps }: AppProps) {
  const [userData, setUserData] = useState<UserData>(defaultUserData);
  const path = useRouter().pathname;

  useEffect(() => {
    async function getUser() {
      const user = await getUserFromJWT();
      setUserData(user[0]);
    }
    if (!(path === "/signup" || path === "/login")) {
      getUser();
    }
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
