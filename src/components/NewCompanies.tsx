import React from "react";
import Tag from "./Tag";
import DummyImageComponent from "./DummyImageComponent";
import { LOGO_ICON } from "@/constants";
import LogoNameTemp from "./newCompanies/LogoNameTemp";

const NewCompanies = () => {
  return (
    <div className="flex flex-col m-2 p-4 border w-[30vw] space-y-3  ">
      <h2 className="text-xl text-center font-medium">New Companies</h2>
      <div className="flex flex-col space-y-4 ">
        <Tag text="#NFT" color="red" />
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
