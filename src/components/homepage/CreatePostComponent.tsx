import React, { ChangeEvent, useContext, useEffect, useState } from "react";
import BigButton from "../buttons/BigButton";
import SmallInputBox from "../inputBoxes/SmallInputBox";
import { UserDataContext } from "@/context/userDataContext";
import { createPost } from "@/lib/post/createPost";
import getUserFromJWT from "@/lib/auth/getUserIdFromJWT";
import TagInput from "../inputBoxes/TagInputBox";

const CreatePostComponent = () => {
  const { userData, setUserData } = useContext(UserDataContext);
  const [tags, setTags] = useState<{ tagName: string; id: string }[]>([]);
  const [postDetails, setPostDetails] = useState({
    logoUrl: userData?.logoUrl!,
    companyName: userData?.companyName,
    followers: userData?.followers,
    description: "",
    views: 0,
    tags: [""],
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

  async function handleSubmit(userId: string) {
    setLoading(true);
    await createPost(postDetails, userId);
    setLoading(false);
  }

  useEffect(() => {
    setPostDetails({
      ...postDetails,
      tags: tags.map((tag) => tag.tagName),
    });
  }, [tags]);

  return (
    <div className="flex flex-col   m-2 space-y-2">
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
          <div className="flex space-x-2 items-center">
            <TagInput tags={tags} setTags={setTags} />
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
          className="w-min-96"
          text={loading ? "Creating..." : "Create Collaboration Post"}
          disabledLogic={loading}
          onClickLogic={() => handleSubmit(userData._id)}
        />
      </div>
      {errorMessage && <p className="text-black">{errorMessage}</p>}
    </div>
  );
};

export default CreatePostComponent;
