import { twitterAuth } from "@/lib/auth/twitterAuth";

const TwitterSignup = () => {
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

export default TwitterSignup;
