import React, { HTMLAttributes } from "react";

const BigButton = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  return (
    <button
      className={`p-2 border h-fit px-4 bg-[#3E8A58] text-white rounded-md ${className}`}
    >
      {text}
    </button>
  );
};

export default BigButton;
