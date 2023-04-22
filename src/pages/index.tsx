import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <h1 className="flex space-x-2">
      <Link href={"/login"} className="text-blue-700">
        Login
      </Link>
      <Link href={"/signup"} className="text-blue-700">
        Signup
      </Link>
    </h1>
  );
}
