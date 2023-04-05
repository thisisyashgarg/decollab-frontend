import { DUMMY_IMAGE } from "@/data/data";
import React from "react";
import InputBox from "./inputBox/InputBox";

const Navbar = () => {
  return (
    <div className="flex justify-between p-2 m-2 border items-center">
      <div className="flex">
        <img src="" alt="" />
        <h1>Decollab</h1>
      </div>
      <InputBox type="text" className="border p-2 w-96" placeholder="Search" />
      <div className="flex">
        <h1>Profile</h1>
        <img src="" alt="" />
      </div>
    </div>
  );
};

export default Navbar;
