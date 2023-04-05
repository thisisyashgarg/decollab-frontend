import { Inter, Poppins } from "next/font/google";
import "../styles/globals.css";
import type { AppProps } from "next/app";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <main className={inter.className}>
        <Component {...pageProps} />
      </main>
    </>
  );
}
