import React, { useContext, useEffect, useState } from "react";
import Tag from "./Tag";
import LogoNameTemp from "./newCompanies/LogoNameTemp";
import SmallHeading from "./headings/SmallHeading";
import { UserData, UserDataContext } from "@/context/userDataContext";
import { LOGO_ICON } from "@/constants";
import getProfilesByTagName from "@/auth/getProfilesByTagName";
import LabelAndInput from "./inputBoxes/LabelAndInput";

const NewCompanies = () => {
  const { userData } = useContext(UserDataContext);
  // const [relevantTags, setRelevantTags] = useState(
  //   userData?.tags?.map((tag) => tag.tagName)
  // );
  // const [newCompanies, setNewCompanies] = useState<UserData[]>([]);
  // console.log(relevantTags);

  // async function handleCompaniesByTags(tag: string): Promise<UserData[]> {
  //   const users = await getProfilesByTagName(tag);
  //   return users;
  // }
  // console.log(handleCompaniesByTags("ai"));

  // async function basjdhc(tag: string) {
  //   return <div className="flex flex-col space-y-3"></div>;
  // }

  // const jsxOfCompanies = relevantTags?.map(async (tag) => {
  //   const relevantCompanies = await handleCompaniesByTags(tag);
  //   console.log(relevantCompanies);
  //   relevantCompanies.map((company) => {
  //     return (
  //       <div>
  //         <LogoNameTemp text={company.companyName} logoUrl={company.logoUrl} />
  //       </div>
  //     );
  //   });
  // });
  // console.log(jsxOfCompanies);

  return (
    <div className="flex flex-col m-2 p-4 border rounded-md shadow-md w-[25vw] space-y-3 h-full  ">
      <SmallHeading text="New Companies" className="text-center" />
      <div className="flex flex-col space-y-4 ">
        {userData?.tags?.map((tag, index) => {
          return (
            <div key={`newCompanies${tag}${index}`} className="space-y-2">
              <Tag text={`#${tag.tagName}`} />
              <div className="flex flex-col space-y-3">
                {/* {(await handleCompaniesByTags(tag.tagName))?.map(
                  (company: UserData) => {
                    return (
                      <LogoNameTemp
                        text={company?.companyName}
                        logoUrl={company?.logoUrl!}
                      />
                    );
                  }
                )} */}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NewCompanies;
