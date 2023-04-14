export async function signupTheUser(
  email: string,
  password: string,
  twitterUsername: string,
  companyName: string,
  tags: string[]
) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}signup`, {
    method: "POST",
    mode: "cors",
    credentials: "include",
    body: JSON.stringify({
      email,
      password,
      twitterUsername,
      companyName,
      tags,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return await response.json();
}
