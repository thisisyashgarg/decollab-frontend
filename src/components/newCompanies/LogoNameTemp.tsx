import { LOGO_ICON } from "@/constants";
import React from "react";

const LogoNameTemp = ({ text }: { text: string }) => {
  return (
    <div className="flex items-center space-x-2">
      <img src={LOGO_ICON} alt="" className="w-10" />
      <h4>{text}</h4>
    </div>
  );
};

export default LogoNameTemp;
