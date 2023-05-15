import SearchResultsComponent from "@/components/SearchResultsComponent";
import FeedPageLayout from "@/components/layouts/FeedPageLayout";
import React from "react";

const Search = () => {
  return (
    <FeedPageLayout>
      <div className="flex flex-col w-full h-full">
        <SearchResultsComponent />
      </div>
    </FeedPageLayout>
  );
};

export default Search;
