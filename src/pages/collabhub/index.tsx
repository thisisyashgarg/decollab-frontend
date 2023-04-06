import CreatePost from "@/components/CreatePost";
import Post from "@/components/Post";
import FeedPageLayout from "@/components/layouts/FeedPageLayout";
import React from "react";

const CollabHub = () => {
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
