import React, { useContext, useEffect, useState } from "react";
import Tag from "./Tag";
import LogoNameTemp from "./newCompanies/LogoNameTemp";
import SmallHeading from "./headings/SmallHeading";
import { UserData, UserDataContext } from "@/context/userDataContext";
import getProfilesByTagName from "@/auth/getProfilesByTagName";

const NewCompanies: React.FC = () => {
  const { userData } = useContext(UserDataContext);
  const [usersByTag, setUsersByTag] = useState<{ [tag: string]: UserData[] }>(
    {}
  );

  useEffect(() => {
    async function fetchData() {
      const usersByTag: { [tag: string]: UserData[] } = {};
      if (userData?.tags?.length) {
        for (const tag of userData.tags) {
          const users = await handleCompaniesByTags(tag.tagName);
          usersByTag[tag.tagName] = users;
        }
        setUsersByTag(usersByTag);
      }
    }
    fetchData();
  }, [userData]);

  async function handleCompaniesByTags(tag: string): Promise<UserData[]> {
    const users = await getProfilesByTagName(tag);
    return users;
  }

  return (
    <div className="flex flex-col m-2 p-4 border rounded-md shadow-md w-[25vw] space-y-3 h-full  ">
      <SmallHeading text="New Companies" className="text-center" />
      <div className="flex flex-col space-y-4 ">
        {userData?.tags?.map((tag, index) => {
          const users = usersByTag[tag.tagName] || [];
          return (
            <div key={`newCompanies${tag}${index}`} className="space-y-2">
              <Tag text={`#${tag.tagName}`} />
              <div className="flex flex-col space-y-3">
                {users.map(
                  (user) =>
                    userData.companyName !== user.companyName && (
                      <LogoNameTemp
                        key={`newCompanies${tag}${user._id}`}
                        logoUrl={user.logoUrl}
                        text={user.companyName}
                      />
                    )
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NewCompanies;
