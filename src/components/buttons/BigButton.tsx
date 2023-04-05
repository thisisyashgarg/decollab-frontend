import React, { HTMLAttributes } from "react";

const BigButton = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  return <button className={`p-2 border ${className}`}>{text}</button>;
};

export default BigButton;
