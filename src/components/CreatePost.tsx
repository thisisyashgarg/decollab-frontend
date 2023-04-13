import React, { ChangeEvent, useState } from "react";
import BigButton from "./buttons/BigButton";
import SmallInputBox from "./inputBoxes/SmallInputBox";
import SmallButton from "./buttons/SmallButton";

const CreatePost = () => {
  const [postDetails, setPostDetails] = useState({
    description: "",
    views: 0,
    tags: "",
    timeFrame: "",
    companiesReachedOut: 0,
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setPostDetails({
      ...postDetails,
      [name]: value,
    });
  };
  console.log(postDetails);

  return (
    <div className="flex flex-col border p-2 m-2 space-y-2">
      <SmallInputBox
        name="description"
        value={postDetails.description}
        type="text"
        className=" w-[100%] p-2"
        placeholder="Create a collaboration post..."
        handleChange={handleInputChange}
      />
      <div className="flex justify-between items-center ">
        <div className="flex flex-col space-y-2">
          <div className="flex space-x-2">
            <SmallInputBox
              name="tags"
              value={postDetails.tags}
              type="text"
              className="border p-2"
              placeholder="Add tags"
              handleChange={handleInputChange}
            />
            <SmallButton text="Add Tag" />
          </div>
          <SmallInputBox
            name="timeFrame"
            value={postDetails.timeFrame}
            type="text"
            className="border"
            placeholder="Enter the time frame"
            handleChange={handleInputChange}
          />
        </div>
        <BigButton
          text={loading ? "Creating..." : "Create Collaboration Post"}
          disabledLogic={loading}
        />
      </div>
      {errorMessage && <p className="text-black">{errorMessage}</p>}
    </div>
  );
};

export default CreatePost;
