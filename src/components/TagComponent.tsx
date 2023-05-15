import generateRandomHexCode from "@/helper/randomHexCodes";
import React from "react";

const TagComponent = ({ text, color }: { text: string; color?: string }) => {
  return (
    <p
      className={`px-2 py-1 w-fit rounded-md text-blue-900 border border-blue-900`}
    >
      {text}
    </p>
  );
};

export default TagComponent;
