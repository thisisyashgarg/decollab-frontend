import React from "react";
import BigButton from "./buttons/BigButton";
import InputBox from "./inputBox/InputBox";

const CreatePost = () => {
  return (
    <div className="flex flex-col border p-2 m-2 space-y-2">
      <InputBox
        type="text"
        className="border w-[100%]  p-2"
        placeholder="Create a collaboration post..."
      />
      <div className="flex justify-between  ">
        <div className="flex flex-col space-y-2">
          <div className="flex space-x-2">
            <InputBox
              type="text"
              className="border p-1"
              placeholder="Add relevant tags"
            />
            <button className="border">Add Tag</button>
          </div>
          <InputBox type="date" className="border" />
        </div>
        <BigButton text={"Create Collaboration Post"} />
      </div>
    </div>
  );
};

export default CreatePost;
