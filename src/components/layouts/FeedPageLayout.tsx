import React, { ReactNode, useState } from "react";
import Navbar from "../Navbar";
import NewCompanies from "../NewCompanies";
import Sidebar from "../Sidebar";
import { SearchResultsContext } from "@/context/searchResultsContext";
import { UserData } from "@/context/userDataContext";

const FeedPageLayout = ({ children }: { children: ReactNode }) => {
  const [searchResults, setSearchResults] = useState<UserData[]>([]);
  return (
    <SearchResultsContext.Provider value={{ searchResults, setSearchResults }}>
      <div className=" h-screen  ">
        <Navbar />
        <div className="flex justify-between">
          <Sidebar />
          {children}
          <NewCompanies />
        </div>
      </div>
    </SearchResultsContext.Provider>
  );
};

export default FeedPageLayout;
