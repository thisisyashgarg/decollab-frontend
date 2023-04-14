export default async function getAllPosts() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}posts`, {
    method: "GET",
    mode: "cors",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  });
  await response.json();
}
