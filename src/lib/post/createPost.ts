import { Post } from "@/types/types";

export async function createPost(postDetails: Post, userId: string) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}collabhub/create`,
    {
      method: "POST",
      mode: "cors",
      credentials: "include",
      body: JSON.stringify([postDetails, { id: userId }]),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  if (response.status === 200) {
    console.log("post created successfully");
    return await response.json();
  } else {
    console.log("error creating the post");
    return "error creating the post";
  }
}
