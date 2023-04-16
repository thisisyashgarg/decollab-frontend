import React, { ReactNode } from "react";
import Navbar from "../Navbar";
import NewCompanies from "../NewCompanies";
import Sidebar from "../Sidebar";

const FeedPageLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className=" h-screen  ">
      <Navbar />
      <div className="flex justify-between">
        <Sidebar />
        {children}
        <NewCompanies />
      </div>
    </div>
  );
};

export default FeedPageLayout;
