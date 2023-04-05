import CreatePost from "@/components/CreatePost";
import Post from "@/components/Post";
import FeedPageLayout from "@/components/layouts/FeedPageLayout";
import { useRouter } from "next/router";
import React from "react";

const CollabHub = () => {
  return (
    <FeedPageLayout>
      <div className="flex flex-col ">
        <CreatePost />
        <Post />
      </div>
    </FeedPageLayout>
  );
};

export default CollabHub;
