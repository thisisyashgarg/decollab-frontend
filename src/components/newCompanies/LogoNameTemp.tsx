import { LOGO_ICON } from "@/constants";
import React from "react";

const LogoNameTemp = ({
  text,
  logoUrl,
}: {
  text: string;
  logoUrl?: string;
}) => {
  return (
    <div className="flex items-center space-x-2">
      <img src={logoUrl} alt="" className="w-10 rounded-full" />
      <h4>{text}</h4>
    </div>
  );
};

export default LogoNameTemp;
