import { LOGO_ICON } from "@/constants";
import Image from "next/image";
import React from "react";
import SmallButton from "./buttons/SmallButton";
import SmallHeading from "./headings/SmallHeading";
import Tag from "./Tag";
import SmallInputBox from "./inputBoxes/SmallInputBox";

const ProfileComponent = () => {
  return (
    <div className="flex border-4 border-red-900 h-screen">
      <div className="flex flex-col items-center border border-green-900 p-2 w-[25%] h-full justify-around">
        <div className="flex flex-col items-center space-y-2">
          <Image src={LOGO_ICON} alt={""} width={100} height={100} />
          <div className="flex">
            <h1>GotBit</h1>
            <SmallButton text="Follow +" />
          </div>
          <p>10.2K followers</p>
        </div>

        <div className="space-y-2 text-center">
          <SmallHeading text="Team / Advisors" />
          <div className="flex">
            {Array(3)
              .fill("")
              .map(() => {
                return (
                  <Image src={LOGO_ICON} alt={""} width={40} height={40} />
                );
              })}

            <SmallButton text="Add +" />
          </div>
        </div>

        <div className="text-center">
          <SmallHeading text="Tags" />
          <div className="flex flex-wrap justify-center">
            {Array(5)
              .fill("")
              .map(() => {
                return <Tag text={"Web3"} />;
              })}
          </div>
        </div>
      </div>

      <div className="border p-2 m-2 w-[75%]">
        <SmallHeading text="About Us" />
        <SmallInputBox type={"text"} placeholder="About Us" />

        <div className="flex border space-x-2">
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

        <div className="flex ">
          <div>
            <SmallHeading text="Brands collaborated " />
            <div className="flex">
              {Array(4)
                .fill("")
                .map(() => {
                  return (
                    <Image
                      src={LOGO_ICON}
                      alt={"logo"}
                      width={40}
                      height={40}
                    />
                  );
                })}
            </div>
          </div>

          <div>
            <SmallHeading text="Socials" />
            <div className="flex">
              {Array(2)
                .fill("")
                .map(() => {
                  return (
                    <Image
                      src={LOGO_ICON}
                      alt={"logo"}
                      width={40}
                      height={40}
                    />
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileComponent;
