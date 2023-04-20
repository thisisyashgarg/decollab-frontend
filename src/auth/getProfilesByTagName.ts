export default async function getProfilesByTagName(tag: string) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}newcompanies`,
    {
      method: "POST",
      mode: "cors",
      credentials: "include",
      body: JSON.stringify({ tag }),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const data = await response.json();
  return data;
}
