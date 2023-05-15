import ChatComponent from "@/components/chats/ChatComponent";
import FeedPageLayout from "@/components/layouts/FeedPageLayout";

import React from "react";

const Chats = () => {
  return (
    <FeedPageLayout>
      <ChatComponent />
    </FeedPageLayout>
  );
};

export default Chats;
