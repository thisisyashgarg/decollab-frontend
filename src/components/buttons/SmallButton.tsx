import React from "react";

const SmallButton = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  return (
    <button className=" bg-[#CAE3D2] text-[#0B5B49] border border-[#0B5B49] rounded-md px-2 ">
      {text}
    </button>
  );
};

export default SmallButton;
