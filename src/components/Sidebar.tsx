import React from "react";
import SidebarButton from "./buttons/SidebarButton";
import { CHATS_ICON, HOME_ICON, NOTI_ICON } from "@/constants";

const Sidebar = () => {
  return (
    <div className="flex flex-col m-2 p-4  space-y-6 w-[23vw] h-full">
      <SidebarButton text="Home" src={HOME_ICON} href="/collabhub" />
      <SidebarButton
        text="Chats"
        src={CHATS_ICON}
        href="/chats"
        className="text-black"
      />
      <SidebarButton
        text="Notifications"
        src={NOTI_ICON}
        href="/notifications"
      />
    </div>
  );
};

export default Sidebar;
