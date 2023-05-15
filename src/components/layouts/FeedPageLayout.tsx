import React, { ReactNode, useState } from "react";
import Navbar from "../NavbarComponent";
import Sidebar from "../SidebarComponent";
import { SearchResultsContext } from "@/context/searchResultsContext";
import NewCompaniesSectionComponent from "../homepage/NewCompaniesSectionComponent";
import { UserData } from "@/types/types";

const FeedPageLayout = ({ children }: { children: ReactNode }) => {
  const [searchResults, setSearchResults] = useState<UserData[]>([]);
  return (
    <SearchResultsContext.Provider value={{ searchResults, setSearchResults }}>
      <div className=" h-screen  ">
        <Navbar />
        <div className="flex justify-between">
          <Sidebar />
          {children}
          <NewCompaniesSectionComponent />
        </div>
      </div>
    </SearchResultsContext.Provider>
  );
};

export default FeedPageLayout;
