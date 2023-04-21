import SearchResults from "@/components/SearchResults";
import FeedPageLayout from "@/components/layouts/FeedPageLayout";

import React from "react";

const Search = () => {
  return (
    <FeedPageLayout>
      <div className="flex flex-col w-full h-full">
        <SearchResults />
      </div>
    </FeedPageLayout>
  );
};

export default Search;
