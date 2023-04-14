import React, { useContext } from "react";

import Link from "next/link";
import { LOGO_ICON } from "@/constants";
import SmallInputBox from "./inputBoxes/SmallInputBox";
import logoutTheUser from "@/auth/logout";
import { useRouter } from "next/router";
import { UserDataContext, defaultUserData } from "@/context/userDataContext";

const Navbar = () => {
  const router = useRouter();
  const { setUserData } = useContext(UserDataContext);
  async function handleLogout() {
    await logoutTheUser();
    setUserData(defaultUserData);
    router.push("/login");
  }

  return (
    <nav className="flex justify-between p-2 m-2 border items-center">
      <Link className="flex items-center space-x-2" href={"/collabhub"}>
        <img src={LOGO_ICON} alt="" className="w-10" />
        <h1>Decollab</h1>
      </Link>
      <SmallInputBox type={"text"} placeholder="Search" className="w-96" />
      <div className="flex space-x-2">
        {" "}
        <button
          onClick={handleLogout}
          className="text-xl cursor-pointer text-gray-400"
        >
          Logout
        </button>
        <Link href="/profile" className="flex items-center space-x-2">
          <img src={LOGO_ICON} alt="" className="w-10" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
