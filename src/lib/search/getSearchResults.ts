export default async function getSearchResults(searchQuery: string) {
  const dataToBeSent = { q: searchQuery };
  const queryString = new URLSearchParams(dataToBeSent).toString();
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}search?${queryString}`,
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
  return data;
}
