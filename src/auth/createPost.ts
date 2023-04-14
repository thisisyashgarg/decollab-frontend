type Post = {
  companyName: string;
  followers: number;
  description: string;
  views: number;
  tags: string[];
  timeFrame: string;
  companiesReachedOut: number;
};

export async function createPost(postDetails: Post, userId: string) {
  const {
    description,
    views,
    tags,
    timeFrame,
    companiesReachedOut,
    companyName,
    followers,
  } = postDetails;

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}collabhub/create`,
    {
      method: "POST",
      mode: "cors",
      credentials: "include",
      body: JSON.stringify([
        {
          companyName,
          followers,
          description,
          views,
          tags,
          timeFrame,
          companiesReachedOut,
        },
        { id: userId },
      ]),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return await response.json();
}
