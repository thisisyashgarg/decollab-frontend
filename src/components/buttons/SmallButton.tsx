import React from "react";

const SmallButton = ({
  text,
  className,
  onClickLogic,
}: {
  text: string;
  className?: string;
  onClickLogic?: () => void;
}) => {
  return (
    <button
      onClick={onClickLogic}
      className={`bg-[#CAE3D2] text-[#0B5B49] border border-[#0B5B49] rounded-md px-2 w-fit h-fit ${className}`}
    >
      {text}
    </button>
  );
};

export default SmallButton;
