import React, { useEffect, useState } from "react";

import BigButton from "../buttons/BigButton";
import { LOGO_ICON } from "@/constants";
import CollabRequestModal from "../modal/CollabRequestModal";
import SmallHeading from "../headings/SmallHeading";
import getAllPosts from "@/lib/post/getAllPosts";
import TagComponent from "../TagComponent";
import { PostType, Tag } from "@/types/types";

const PostComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [allPosts, setAllPosts] = useState<PostType[]>();
  const handleOpen = () => setIsModalOpen((prev) => !prev);
  const handleClose = () => setIsModalOpen((prev) => !prev);

  async function getPostsArray() {
    const posts = await getAllPosts();
    setAllPosts(posts);
  }

  useEffect(() => {
    getPostsArray();
  }, []);

  return (
    <>
      <CollabRequestModal
        handleClose={handleClose}
        handleOpen={handleOpen}
        isModalOpen={isModalOpen}
      />

      <div className="flex flex-col">
        {allPosts?.map((post) => {
          return (
            <div
              className="flex flex-col border rounded-md p-4 m-2 space-y-4 shadow-md"
              key={post._id}
            >
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <img
                    src={post.logoUrl}
                    alt=""
                    className="w-12 rounded-full"
                  />
                  <div className="flex flex-col">
                    <SmallHeading text={post.companyName} />
                    <p className="text-gray-400">{post.followers} followers</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2 ">
                  <h3>{post.views} views</h3>
                  <img src={LOGO_ICON} alt="" className="w-10" />
                </div>
              </div>
              <h2>{post.description}</h2>
              <div className="flex space-x-2">
                {post.tags.map((tag: string, index: number) => {
                  return (
                    <TagComponent
                      text={`#${tag}`}
                      key={`createPost${tag}${index}`}
                    />
                  );
                })}
              </div>
              <div className="flex justify-between">
                <h2 className="text-l ">Time Frame - {post.timeFrame}</h2>
                <h2 className="text-l">
                  Companies Reached Out - {post.companiesReachedOut}
                </h2>
              </div>
              <BigButton
                text="Send Collaboration Request"
                className="text-xl"
                onClickLogic={handleOpen}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default PostComponent;
