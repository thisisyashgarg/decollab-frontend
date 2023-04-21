export async function signupTheUser(
  email: string,
  password: string,
  tags: { tagName: string; id: string }[],
  companyName: string
) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}signup`, {
    method: "POST",
    mode: "cors",
    credentials: "include",
    body: JSON.stringify({
      email,
      password,
      tags,
      companyName,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return await response.json();
}
