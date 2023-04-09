import { Poppins } from "next/font/google";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { AuthProvider } from "@/context/AuthContext";

const font = Poppins({ subsets: ["latin"], weight: "400" });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <AuthProvider>
        <main className={font.className}>
          <Component {...pageProps} />
        </main>
      </AuthProvider>
    </>
  );
}
