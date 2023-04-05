import React from "react";
import DummyImageComponent from "./DummyImageComponent";
import { useRouter } from "next/router";
import Link from "next/link";
import SidebarButton from "./buttons/SidebarButton";
import { CHATS_ICON, HOME_ICON, NOTI_ICON } from "@/constants";

const Sidebar = () => {
  return (
    <div className="flex flex-col m-2 p-4 border space-y-6 w-[30vw] col-sapn-1">
      <Link href="/collabhub" className="flex items-center">
        <SidebarButton text="Home" src={HOME_ICON} />
      </Link>
      <Link href={"/chats"} className="flex items-center">
        <SidebarButton text="Chats" src={CHATS_ICON} />
      </Link>
      <Link href={"/notifications"} className="flex items-center">
        <SidebarButton text="Notifications" src={NOTI_ICON} />
      </Link>
    </div>
  );
};

export default Sidebar;
