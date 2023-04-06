import { LOGO_ICON } from "@/constants";
import React from "react";

const ChatsContent = () => {
  return (
    <div className="flex flex-col border p-4 m-2 space-y-4 w-full h-full">
      <div className="flex space-x-2">
        <img src={LOGO_ICON} alt="" className="w-12" />
        <div>
          <h2 className="text-xl">PrimeXBT</h2>
          <p className="text-gray-500">
            We want collaborate with you on developing a new platform for
            collaborating companies in a closed environment
          </p>
        </div>
      </div>
      <div className="flex   space-x-2">
        <img src={LOGO_ICON} alt="" className="w-12" />
        <div>
          <h2 className="text-xl">Zomato</h2>
          <p className="text-gray-500">Can we arrange a meeting at 10 today?</p>
        </div>
      </div>
    </div>
  );
};

export default ChatsContent;
