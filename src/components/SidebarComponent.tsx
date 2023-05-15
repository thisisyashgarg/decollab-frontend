import React from "react";
import SidebarButton from "./buttons/SidebarButton";
import { CHATS_ICON, HOME_ICON, NOTIFICATION_ICON } from "@/constants";

const SidebarComponent = () => {
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
        src={NOTIFICATION_ICON}
        href="/notifications"
      />
    </div>
  );
};

export default SidebarComponent;
