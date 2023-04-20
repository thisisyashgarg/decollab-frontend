import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import { LOGO_ICON } from "@/constants";
import SmallInputBox from "./inputBoxes/SmallInputBox";
import { UserDataContext } from "@/context/userDataContext";
import handleLogout from "@/helper/handleLogout";
import getSearchResults from "@/auth/getSearchResults";
import BigButton from "./buttons/BigButton";

const Navbar = () => {
  const { userData, setUserData } = useContext(UserDataContext);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  async function handleSearchButton(searchQuery: string) {
    const users = await getSearchResults(searchQuery);
    console.log(users);
  }

  useEffect(() => {
    handleSearchButton(searchQuery);
  }, [searchQuery]);

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
