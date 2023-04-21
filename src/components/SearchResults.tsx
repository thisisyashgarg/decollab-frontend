import { SearchResultsContext } from "@/context/searchResultsContext";
import React, { useContext, useEffect, useState } from "react";
import Post from "./Post";

const SearchResults = () => {
  const { searchResults } = useContext(SearchResultsContext);
  const [error, setError] = useState("");

  return (
    <div>
      <h2>
        {searchResults.length === 0 ? "No results found" : "Search Results"}
      </h2>
      <p>{searchResults[0]?.companyName}</p>
    </div>
  );
};

export default SearchResults;
