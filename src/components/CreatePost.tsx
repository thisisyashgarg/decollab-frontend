import React, { ChangeEvent, useContext, useEffect, useState } from "react";
import BigButton from "./buttons/BigButton";
import SmallInputBox from "./inputBoxes/SmallInputBox";
import { UserDataContext } from "@/context/userDataContext";
import { createPost } from "@/auth/createPost";
import getUserFromJWT from "@/auth/getUserIdFromJWT";
import TagInput from "./inputBoxes/TagInputBox";

const CreatePost = () => {
  const { userData, setUserData } = useContext(UserDataContext);
  const [tags, setTags] = useState<string[]>([]);

  async function getUser() {
    const user = await getUserFromJWT();
    setUserData(user[0]);
  }

  const [postDetails, setPostDetails] = useState({
    logoUrl: userData.logoUrl!,
    companyName: userData.companyName,
    followers: userData.followers,
    description: "",
    views: 0,
    tags: tags,
    timeFrame: "",
    companiesReachedOut: 0,
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  console.log(postDetails);

  useEffect(() => {
    getUser();
  }, [postDetails]);

  useEffect(() => {
    setPostDetails({
      ...postDetails,
      tags: tags,
    });
  }, [tags]);

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
            {/* <SmallInputBox
              name="tags"
              value={postDetails.tags}
              type="text"
              className="border p-2"
              placeholder="Add tags"
              handleChange={handleInputChange}
            />
            <SmallButton text="Add Tag" className="py-2" /> */}
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

export default CreatePost;
