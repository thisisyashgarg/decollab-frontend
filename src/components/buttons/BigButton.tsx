import React, { MouseEventHandler } from "react";

const BigButton = ({
  text,
  className,
  onClickLogic,
  disabledLogic,
}: {
  text: string;
  className?: string;
  onClickLogic?: () => void;
  disabledLogic?: any;
}) => {
  return (
    <button
      disabled={disabledLogic}
      onClick={onClickLogic}
      className={`p-2 border h-fit px-4 bg-[#3E8A58] text-white rounded-md tracking-wider ${className}`}
    >
      {text}
    </button>
  );
};

export default BigButton;
