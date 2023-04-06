import { LOGO_ICON } from "@/constants";
import React from "react";
import Post from "./Post";

const NotificationsContent = () => {
  return (
    <div className="flex flex-col">
      <div className="flex border p-4 m-2 mb-0  space-y-4  justify-between">
        <div className="flex flex-col ">
          <h2 className="text-xl">PrimeXBT</h2>
          <p className="text-gray-500">PrimeXBT has referred you</p>
        </div>
        <p className="text-gray-500">1 hr ago</p>
      </div>
      <Post />
      <div className="flex border p-4 m-2 mb-0  space-y-4  justify-between">
        <div className="flex flex-col ">
          <h2 className="text-xl">PrimeXBT</h2>
          <p className="text-gray-500">
            PrimeXBT has posted a new collaboration
          </p>
        </div>
        <p className="text-gray-500">2 hr ago</p>
      </div>
    </div>
  );
};

export default NotificationsContent;
