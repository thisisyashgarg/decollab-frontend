export default async function logoutTheUser() {
  await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}logout`, {
    method: "GET",
    mode: "cors",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  });
}
