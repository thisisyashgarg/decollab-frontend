import { DUMMY_IMAGE } from "@/data/data";
import React from "react";

const Sidebar = () => {
  return (
    <div className="flex flex-col m-2 p-4 border space-y-2 w-[30vw]">
      <div className="flex">
        <img src="" alt="" />
        <h2 className="text-xl">Home</h2>
      </div>
      <div className="flex">
        <img src="" alt="" />
        <h2 className="text-xl">Chats</h2>
      </div>
      <div className="flex">
        <img src="" alt="" />
        <h2 className="text-xl">Notifications</h2>
      </div>
    </div>
  );
};

export default Sidebar;
