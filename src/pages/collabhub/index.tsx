import CreatePost from "@/components/CreatePost";
import Post from "@/components/Post";
import FeedPageLayout from "@/components/layouts/FeedPageLayout";
import { UserDataContext } from "@/context/userDataContext";
import React, { useContext } from "react";

const CollabHub = () => {
  const { userData } = useContext(UserDataContext);
  console.log(userData);
  return (
    <FeedPageLayout>
      <div className="flex flex-col w-full h-full">
        <CreatePost />
        <Post />
      </div>
    </FeedPageLayout>
  );
};

export default CollabHub;
