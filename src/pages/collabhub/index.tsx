import getUserFromJWT from "@/auth/getUserIdFromJWT";
import CreatePost from "@/components/CreatePost";
import Post from "@/components/Post";
import FeedPageLayout from "@/components/layouts/FeedPageLayout";
import { UserDataContext } from "@/context/userDataContext";
import React, { useContext, useEffect } from "react";

const CollabHub = () => {
  const { setUserData } = useContext(UserDataContext);
  async function getUser() {
    const user = await getUserFromJWT();
    setUserData(user[0]);
  }

  useEffect(() => {
    getUser();
  }, []);

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
