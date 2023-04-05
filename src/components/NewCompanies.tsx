import { DUMMY_IMAGE } from "@/data/data";
import React from "react";

const NewCompanies = () => {
  return (
    <div className="flex flex-col m-2 p-2 border w-[30vw]">
      <h2 className="text-xl">New Companies</h2>
      <div className="flex flex-col">
        <h3>#DeFi</h3>
        <div className="flex">
          <img src="" alt="" />
          <h4>BoAt</h4>
        </div>
        <div className="flex">
          <img src="" alt="" />
          <h4>BoAt</h4>
        </div>
        <div className="flex">
          <img src="" alt="" />
          <h4>BoAt</h4>
        </div>
      </div>
    </div>
  );
};

export default NewCompanies;
