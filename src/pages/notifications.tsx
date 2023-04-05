import CreatePost from "@/components/CreatePost";
import NotificationsContent from "@/components/NotificationsContent";
import Post from "@/components/Post";
import FeedPageLayout from "@/components/layouts/FeedPageLayout";
import React from "react";

const Notifications = () => {
  return (
    <FeedPageLayout>
      <NotificationsContent />
    </FeedPageLayout>
  );
};

export default Notifications;
