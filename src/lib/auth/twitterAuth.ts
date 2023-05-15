export async function twitterAuth() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}auth/twitter`,
    {
      method: "GET",
      mode: "cors",
      credentials: "include",

      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return await response.json();
}
