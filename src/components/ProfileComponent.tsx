import { LOGO_ICON } from "@/constants";
import Image from "next/image";
import React from "react";
import SmallButton from "./buttons/SmallButton";
import SmallHeading from "./headings/SmallHeading";
import Tag from "./Tag";
import SmallInputBox from "./inputBoxes/SmallInputBox";

const ProfileComponent = () => {
  return (
    <div className="flex border p-2 m-2">
      <div className="border p-2 m-2">
        <Image src={LOGO_ICON} alt={""} width={100} height={100} />
        <h1>GotBit</h1>
        <SmallButton text="Follow +" />
        <p>10.2K followers</p>
        <SmallHeading text="Team / Advisors" />
        <div className="flex">
          {Array(3)
            .fill("")
            .map(() => {
              return <Image src={LOGO_ICON} alt={""} width={40} height={40} />;
            })}

          <SmallButton text="Add +" />
        </div>
        <SmallHeading text="Tags" />
        <div className="flex flex-wrap">
          {Array(5)
            .fill("")
            .map(() => {
              return <Tag text={"Web3"} />;
            })}
        </div>
      </div>
      <div className="border p-2 m-2">
        <SmallHeading text="About Us" />
        <SmallInputBox type={"text"} placeholder="About Us" />
        <div className="flex border">
          <div className="flex flex-col">
            <SmallHeading text="Fundings" />
          </div>
          <div className="flex flex-col">
            <SmallHeading text="Flex Posts" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileComponent;
