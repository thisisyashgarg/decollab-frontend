import { Inter, Poppins } from "next/font/google";
import "../styles/globals.css";
import type { AppProps } from "next/app";

const font = Poppins({ subsets: ["latin"], weight: "400" });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <main className={font.className}>
        <Component {...pageProps} />
      </main>
    </>
  );
}
