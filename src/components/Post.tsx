import React, { useState } from "react";
import Tag from "./Tag";
import BigButton from "./buttons/BigButton";
import { LOGO_ICON } from "@/constants";
import CollabRequestModal from "./modal/CollabRequestModal";
import SmallHeading from "./headings/SmallHeading";

const Post = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpen = () => setIsModalOpen((prev) => !prev);
  const handleClose = () => setIsModalOpen((prev) => !prev);
  return (
    <>
      <CollabRequestModal
        handleClose={handleClose}
        handleOpen={handleOpen}
        isModalOpen={isModalOpen}
      />
      <div className="flex flex-col border p-4 m-2 space-y-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <img src={LOGO_ICON} alt="" className="w-10" />
            <div className="flex flex-col">
              <SmallHeading text="Prime XBT" />
              <p className="text-gray-400">10.2K followers</p>
            </div>
          </div>
          <div className="flex items-center space-x-2 ">
            <h3>12K views</h3>
            <img src={LOGO_ICON} alt="" className="w-10" />
          </div>
        </div>
        <h2>
          We are working on a project which lets companies collaborate with each
          other, would love to collaborate on the marketing part
        </h2>
        <div className="flex space-x-2">
          <Tag text="#DeFi" />
          <Tag text="#AI" />
          <Tag text="#Web3" />
        </div>
        <div className="flex justify-between">
          <h2 className="text-l ">Time Frame - 2 months</h2>
          <h2 className="text-l">Companies Reached Out - 20</h2>
        </div>
        <BigButton
          text="Send Collaboration Request"
          className="text-xl"
          onClick={handleOpen}
        />
      </div>
    </>
  );
};

export default Post;
