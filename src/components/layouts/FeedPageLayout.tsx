import React, { ReactNode } from "react";
import NewCompanies from "../NewCompanies";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";

const FeedPageLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="border  ">
      <Navbar />
      <div className="flex">
        <Sidebar />
        {children}
        <NewCompanies />
      </div>
    </div>
  );
};

export default FeedPageLayout;
