import React, { MouseEventHandler } from "react";

const BigButton = ({
  text,
  className,
  onClick,
  disabledLogic,
}: {
  text: string;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabledLogic?: any;
}) => {
  return (
    <button
      disabled={disabledLogic}
      onClick={onClick}
      className={`p-2 border h-fit px-4 bg-[#3E8A58] text-white rounded-md tracking-wider ${className}`}
    >
      {text}
    </button>
  );
};

export default BigButton;
