import React from "react";

import Link from "next/link";
import { LOGO_ICON } from "@/constants";
import SmallInputBox from "./inputBoxes/SmallInputBox";

const Navbar = () => {
  return (
    <nav className="flex justify-between p-2 m-2 border items-center">
      <Link className="flex items-center space-x-2" href={"/collabhub"}>
        <img src={LOGO_ICON} alt="" className="w-10" />
        <h1>Decollab</h1>
      </Link>
      <SmallInputBox type={"text"} placeholder="Search" className="w-96" />
      <Link href="/profile" className="flex items-center space-x-2">
        <h1>Profile</h1>
        <img src={LOGO_ICON} alt="" className="w-10" />
      </Link>
    </nav>
  );
};

export default Navbar;
