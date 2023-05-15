import CreatePostComponent from "@/components/homepage/CreatePostComponent";
import PostComponent from "@/components/homepage/PostComponent";
import FeedPageLayout from "@/components/layouts/FeedPageLayout";

import React from "react";

const CollabHub = () => {
  return (
    <FeedPageLayout>
      <div className="flex flex-col w-full h-full">
        <CreatePostComponent />
        <PostComponent />
      </div>
    </FeedPageLayout>
  );
};

export default CollabHub;
