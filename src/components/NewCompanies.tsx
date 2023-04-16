import React from "react";
import Tag from "./Tag";
import DummyImageComponent from "./DummyImageComponent";
import { LOGO_ICON } from "@/constants";
import LogoNameTemp from "./newCompanies/LogoNameTemp";
import generateRandomHexCode from "@/helper/randomHexCodes";
import SmallHeading from "./headings/SmallHeading";

const NewCompanies = () => {
  return (
    <div className="flex flex-col m-2 p-4 border rounded-md shadow-md w-[25vw] space-y-3 h-full  ">
      <SmallHeading text="New Companies" className="text-center" />
      <div className="flex flex-col space-y-4 ">
        <Tag text="#NFT" />
        <div className="flex flex-col space-y-3">
          <LogoNameTemp text="BoAt" />
          <LogoNameTemp text="Zomato" />
          <LogoNameTemp text="OLA" />
        </div>
      </div>
    </div>
  );
};

export default NewCompanies;
