import React from "react";
import Tag from "./Tag";
import BigButton from "./buttons/BigButton";
import DummyImageComponent from "./DummyImageComponent";
import { LOGO_ICON } from "@/constants";

const Post = () => {
  return (
    <div className="flex flex-col border p-4 m-2 space-y-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img src={LOGO_ICON} alt="" className="w-10" />
          <div className="flex flex-col">
            <h2 className="text-xl">Prime XBT</h2>
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
        <Tag text="#DeFi" color="red" />
        <Tag text="#AI" color="blue" />
        <Tag text="#Web3" color="green" />
      </div>
      <div className="flex justify-between">
        <h2 className="text-l ">Time Frame - 2 months</h2>
        <h2 className="text-l">Companies Reached Out - 20</h2>
      </div>
      <BigButton text="Send Collaboration Request" className="text-xl" />
    </div>
  );
};

export default Post;
