import React from "react";
import Tag from "./Tag";
import BigButton from "./buttons/BigButton";

const Post = () => {
  return (
    <div className="flex flex-col border p-2 m-2 space-y-2">
      <div className="flex justify-between">
        <div className="flex">
          <img src="" alt="" />
          <h1>Prime XBT</h1>
        </div>
        <div className="flex">
          <h3>12K views</h3>
          <img src="" alt="" />
        </div>
      </div>
      <h2>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
        voluptas excepturi neque. Culpa earum non aliquid harum ad autem
        exercitationem laboriosam dignissimos maiores laudantium? Voluptate ex
        eligendi laboriosam inventore alias.
      </h2>
      <div className="flex space-x-2">
        <Tag />
        <Tag />
        <Tag />
      </div>
      <div className="flex justify-between">
        <h2>Time Frame - 2 months</h2>
        <h2>Companies Reached Out - 20</h2>
      </div>
      <BigButton text="Send Collaboration Request" className="" />
    </div>
  );
};

export default Post;
