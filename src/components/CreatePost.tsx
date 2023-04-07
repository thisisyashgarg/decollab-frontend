import React, { useState } from "react";
import BigButton from "./buttons/BigButton";
import SmallInputBox from "./inputBoxes/SmallInputBox";
import SmallButton from "./buttons/SmallButton";

const CreatePost = () => {
  const [tags, setTags] = useState([]);

  return (
    <div className="flex flex-col border p-2 m-2 space-y-2">
      <SmallInputBox
        type="text"
        className=" w-[100%] p-2"
        placeholder="Create a collaboration post..."
      />
      <div className="flex justify-between  items-center ">
        <div className="flex flex-col space-y-2">
          <div className="flex space-x-2">
            <SmallInputBox
              type="text"
              className="border p-2"
              placeholder="Add tags"
            />
            <SmallButton text="Add Tag" />
          </div>
          <SmallInputBox type="date" className="border" />
        </div>
        <BigButton text={"Create Collaboration Post"} />
      </div>
    </div>
  );
};

export default CreatePost;
