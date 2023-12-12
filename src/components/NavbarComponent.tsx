import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import { LOGO_ICON } from "@/constants";
import SmallInputBox from "./inputBoxes/SmallInputBox";
import { UserDataContext } from "@/context/userDataContext";
import handleLogout from "@/helper/handleLogout";
import getSearchResults from "@/lib/search/getSearchResults";
import BigButton from "./buttons/BigButton";
import { SearchResultsContext } from "@/context/searchResultsContext";
import { useRouter } from "next/router";

const NavbarComponent = () => {
  const { searchResults, setSearchResults } = useContext(SearchResultsContext);
  const { userData, setUserData } = useContext(UserDataContext);
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  async function handleSearchButton(searchQuery: string) {
    const users = await getSearchResults(searchQuery);
    if (users.length === 0) {
      setSearchResults([]);
      router.push("/search");
    } else {
      setSearchResults(users);
      router.push("/search");
    }
  }

  return (
    <nav className="flex justify-between p-2 m-2  items-center">
      <Link className="flex items-center space-x-2" href={"/collabhub"}>
        <img src={LOGO_ICON} alt="" className="w-10" />
        <h1 className="text-4xl">Decollab</h1>
      </Link>
      <div className="flex items-center space-x-2">
        <SmallInputBox
          type={"text"}
          placeholder="Search by tag or company name"
          className="w-96"
          name="searchQuery"
          value={searchQuery}
          onClickLogic={() => handleSearchButton(searchQuery)}
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

export default NavbarComponent;
