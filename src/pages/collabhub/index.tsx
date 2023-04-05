import CreatePost from "@/components/CreatePost";
import Navbar from "@/components/Navbar";
import NewCompanies from "@/components/NewCompanies";
import Post from "@/components/Post";
import Sidebar from "@/components/Sidebar";
import React from "react";

const CollabHub = () => {
  return (
    <div className="border p-2 m-2 ">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="flex flex-col">
          <CreatePost />
          <Post />
        </div>
        <NewCompanies />
      </div>
    </div>
  );
};

export default CollabHub;
