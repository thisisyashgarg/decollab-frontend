import { useRouter } from "next/router";
import { useEffect } from "react";

const LoginPage = () => {
  const router = useRouter();

  useEffect(() => {
    const { oauth_token, oauth_verifier } = router.query;
    if (oauth_token && oauth_verifier) {
      handleTwitterCallback(oauth_token.toString(), oauth_verifier.toString());
    }
  }, []);

  const handleTwitterCallback = async (
    oauthToken: string,
    oauthVerifier: string
  ) => {
    try {
      const response = await fetch(
        `/api/auth/twitter/callback?oauth_token=${oauthToken}&oauth_verifier=${oauthVerifier}`
      );
      const data = await response.json();
      router.push("/dashboard");
    } catch (error) {
      console.error(error);
    }
  };

  const handleTwitterAuth = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}api/auth/redirect`,
        {
          method: "GET",
          mode: "cors",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      window.location.href = data.redirectUrl;
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={handleTwitterAuth}>Login with Twitter</button>
    </div>
  );
};

export default LoginPage;
