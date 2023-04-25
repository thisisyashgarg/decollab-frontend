import { twitterAuth } from "@/auth/twitterAuth";
import { useRouter } from "next/router";
import { useEffect } from "react";

const LoginPage = () => {
  async function handleTwitterAuth() {
    console.log(await twitterAuth());
  }

  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={handleTwitterAuth}>Login with Twitter</button>
    </div>
  );
};

export default LoginPage;
