import React, { ReactNode } from "react";
import Navbar from "../components/NavbarComponent";
import Sidebar from "../components/SidebarComponent";
import NewCompaniesSectionComponent from "../components/homepage/NewCompaniesSectionComponent";

const FeedPageLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="border bg-black">
      <Navbar />
      <div className="flex">
        <Sidebar />
        {children}
        <NewCompaniesSectionComponent />
      </div>
    </div>
  );
};

export default FeedPageLayout;
