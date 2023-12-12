import { LOGO_ICON } from "@/constants";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import SmallButton from "../buttons/SmallButton";
import SmallHeading from "../headings/SmallHeading";
import { UserDataContext } from "@/context/userDataContext";
import EditProfileModal from "../modal/EditProfileModal";
import getUserFromJWT from "@/lib/auth/getUserIdFromJWT";
import TagComponent from "../TagComponent";
import { Tag } from "@/types/types";

const ProfileComponent = () => {
  const { userData, setUserData } = useContext(UserDataContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpen = () => setIsModalOpen((prev) => !prev);
  const handleClose = () => setIsModalOpen((prev) => !prev);

  console.log(userData, "userData");

  useEffect(() => {
    async function getUser() {
      const user = await getUserFromJWT();
      setUserData(user[0]);
    }
    getUser();
  }, []);

  return (
    <>
      <EditProfileModal
        handleClose={handleClose}
        handleOpen={handleOpen}
        isModalOpen={isModalOpen}
      />
      <div className="flex ">
        <div className="flex flex-col items-center border border-green-900 p-2 w-[28%] justify-around">
          <div className="flex flex-col items-center space-y-2 ">
            <img
              src={userData?.logoUrl}
              alt=""
              className="w-[150px] rounded-full"
            />
            <SmallButton text="Edit Profile" onClickLogic={handleOpen} />
            <div className="flex items-center space-x-2">
              <h1>{userData?.companyName}</h1>
              <SmallButton text="Follow +" />
            </div>
            <p>{userData?.followers} followers</p>
          </div>

          <div className="space-y-2 text-center">
            <SmallHeading text="Team / Advisors" />
            <div className="flex items-center space-x-2 ">
              <Image src={LOGO_ICON} alt={""} width={40} height={40} />

              <SmallButton text="Add +" />
            </div>
          </div>

          <div className="text-center">
            <SmallHeading text="Tags" />
            <div className="flex flex-wrap justify-center">
              {userData?.tags?.map((tag: Tag, index: number) => {
                return tag.tagName !== undefined ? (
                  <TagComponent key={tag.id} text={`#${tag.tagName}`} />
                ) : null;
              })}
            </div>
          </div>
        </div>

        <div className="border p-2  w-[75%]">
          <SmallHeading text="About Us" />
          <div className="p-4 my-2 border">
            <p>{userData?.about}</p>
          </div>

          <div className="flex border space-x-2 justify-around p-2">
            <div className="flex flex-col">
              <SmallHeading text="Fundings" />
              <div>Yash Garg</div>
              <div>Yash Garg</div>
              <div>Yash Garg</div>
            </div>
            <div className="flex flex-col">
              <SmallHeading text="Flex Posts" />
              <div>Yash Garg</div>
              <div>Yash Garg</div>
              <div>Yash Garg</div>
            </div>
          </div>

          <div className="flex justify-around p-2 ">
            <div>
              <SmallHeading text="Brands collaborated " />
              <div className="flex">
                <Image src={LOGO_ICON} alt={"logo"} width={40} height={40} />
              </div>
            </div>

            <div>
              <SmallHeading text="Socials" />
              <div className="flex">
                <Image src={LOGO_ICON} alt={"logo"} width={40} height={40} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileComponent;
