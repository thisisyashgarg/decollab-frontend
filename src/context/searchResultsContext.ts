import { createContext } from "react";
import { UserData, defaultUserData } from "./userDataContext";

type ContextType = {
  searchResults: UserData[];
  setSearchResults: React.Dispatch<React.SetStateAction<UserData[]>>;
};

export const SearchResultsContext = createContext<ContextType>({
  searchResults: [],
  setSearchResults: () => {},
});
