import { AuthResponse } from "@/pages/profile";

export default async function isAuth() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}auth`, {
    method: "GET",
    mode: "cors",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  return data;
}
