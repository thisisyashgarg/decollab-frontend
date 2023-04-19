import React, { useContext } from "react";
import Tag from "./Tag";
import LogoNameTemp from "./newCompanies/LogoNameTemp";
import SmallHeading from "./headings/SmallHeading";
import { UserDataContext } from "@/context/userDataContext";

const NewCompanies = () => {
  const { userData } = useContext(UserDataContext);
  return (
    <div className="flex flex-col m-2 p-4 border rounded-md shadow-md w-[25vw] space-y-3 h-full  ">
      <SmallHeading text="New Companies" className="text-center" />
      <div className="flex flex-col space-y-4 ">
        {userData?.tags?.map((tag) => {
          return (
            <>
              <Tag text={`#${tag}`} />
              <div className="flex flex-col space-y-3">
                <LogoNameTemp text="BoAt" logoUrl={"dshjikh"} />
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default NewCompanies;
