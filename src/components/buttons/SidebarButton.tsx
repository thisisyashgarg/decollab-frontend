import React from "react";
import DummyImageComponent from "../DummyImageComponent";

const SidebarButton = ({ text, src }: { text: string; src: string }) => {
  return (
    <div className="space-x-3 flex">
      <img src={src} alt="" className="w-5" />
      <h2 className={`text-xl text-gray-400`}>{text}</h2>
    </div>
  );
};

export default SidebarButton;
