export async function loginTheUser(email: string, password: string) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}login`, {
    method: "POST",
    mode: "cors",
    credentials: "include",
    body: JSON.stringify({
      email,
      password,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return await response.json();
}
