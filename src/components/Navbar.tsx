import React from "react";
import InputBox from "./inputBoxes/InputBox";
import Link from "next/link";
import { LOGO_ICON } from "@/constants";

const Navbar = () => {
  return (
    <div className="flex justify-between p-2 m-2 border items-center">
      <Link className="flex items-center space-x-2" href={"/collabhub"}>
        <img src={LOGO_ICON} alt="" className="w-10" />
        <h1>Decollab</h1>
      </Link>
      <InputBox
        type={"text"}
        placeholder="Search"
        className="border p-2 w-96"
      />
      <div className="flex items-center space-x-2">
        <h1>Profile</h1>
        <img src={LOGO_ICON} alt="" className="w-10" />
      </div>
    </div>
  );
};

export default Navbar;
