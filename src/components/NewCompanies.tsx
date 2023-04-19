import React, { useContext } from "react";
import Tag from "./Tag";
import LogoNameTemp from "./newCompanies/LogoNameTemp";
import SmallHeading from "./headings/SmallHeading";
import { UserDataContext } from "@/context/userDataContext";
import { LOGO_ICON } from "@/constants";

const NewCompanies = () => {
  const { userData } = useContext(UserDataContext);
  return (
    <div className="flex flex-col m-2 p-4 border rounded-md shadow-md w-[25vw] space-y-3 h-full  ">
      <SmallHeading text="New Companies" className="text-center" />
      <div className="flex flex-col space-y-4 ">
        {userData?.tags?.map((tag, index) => {
          return (
            <>
              <Tag text={`#${tag}`} key={`newCompanies${tag}${index}`} />
              <div className="flex flex-col space-y-3">
                <LogoNameTemp text="BoAt" logoUrl={LOGO_ICON} />
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default NewCompanies;
