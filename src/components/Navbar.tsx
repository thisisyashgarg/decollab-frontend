import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import { LOGO_ICON } from "@/constants";
import SmallInputBox from "./inputBoxes/SmallInputBox";
import { UserDataContext } from "@/context/userDataContext";
import handleLogout from "@/helper/handleLogout";
import getSearchResults from "@/auth/getSearchResults";
import BigButton from "./buttons/BigButton";
import { SearchResultsContext } from "@/context/searchResultsContext";
import { useRouter } from "next/router";

const Navbar = () => {
  const { searchResults, setSearchResults } = useContext(SearchResultsContext);
  const { userData, setUserData } = useContext(UserDataContext);
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();
  console.log(searchResults);

  async function handleSearchButton(searchQuery: string) {
    const users = await getSearchResults(searchQuery);
    if (users.length === 0) {
      setSearchResults([]);
    } else {
      setSearchResults(users);
    }
    router.push("/search");
  }

  // useEffect(() => {
  //   handleSearchButton(searchQuery);
  // }, [searchQuery]);

  return (
    <nav className="flex justify-between p-2 m-2  items-center">
      <Link className="flex items-center space-x-2" href={"/collabhub"}>
        <img src={LOGO_ICON} alt="" className="w-10" />
        <h1>Decollab</h1>
      </Link>
      <div className="flex items-center space-x-2">
        <SmallInputBox
          type={"text"}
          placeholder="Search"
          className="w-96"
          name="searchQuery"
          value={searchQuery}
          handleChange={(e) => setSearchQuery(e.target.value)}
        />
        <BigButton
          text={"Search"}
          onClickLogic={() => handleSearchButton(searchQuery)}
        />
      </div>

      <div className="flex space-x-2">
        <button
          onClick={() => handleLogout(setUserData)}
          className="text-xl cursor-pointer text-gray-400"
        >
          Logout
        </button>
        <Link href="/profile" className="flex items-center space-x-2">
          <img src={userData?.logoUrl} alt="" className="w-10 rounded-full" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
