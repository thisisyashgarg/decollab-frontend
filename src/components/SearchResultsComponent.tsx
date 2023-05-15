import { SearchResultsContext } from "@/context/searchResultsContext";
import React, { useContext, useEffect, useState } from "react";
import CollabRequestModal from "./modal/CollabRequestModal";
import BigButton from "./buttons/BigButton";

const SearchResultsComponent = () => {
  const { searchResults } = useContext(SearchResultsContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpen = () => setIsModalOpen((prev) => !prev);
  const handleClose = () => setIsModalOpen((prev) => !prev);

  return (
    <>
      <CollabRequestModal
        handleClose={handleClose}
        handleOpen={handleOpen}
        isModalOpen={isModalOpen}
      />
      <h2 className="text-2xl mb-4">Search Results</h2>
      <div className="space-y-2">
        {searchResults?.map((company) => {
          return (
            <div className="border p-3" key={company._id}>
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <img
                    src={company?.logoUrl}
                    className="w-14 h-14 rounded-full"
                    alt="logo"
                  />
                  <div className="flex flex-col">
                    <h2 className="text-xl">{company?.companyName}</h2>
                    <p>{company?.followers} followers</p>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <div>
                    Socials
                    {company?.socialLinks?.map((social, index) => {
                      return <p key={`${social}${index}`}>{social.name}</p>;
                    })}
                  </div>
                  <BigButton text="Send Request" onClickLogic={handleOpen} />
                </div>
              </div>

              <div className="flex">
                Flex Posts
                {company?.flexPosts?.map((flex, index) => {
                  return <p key={`${flex}${index}`}>{flex.post}</p>;
                })}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default SearchResultsComponent;
