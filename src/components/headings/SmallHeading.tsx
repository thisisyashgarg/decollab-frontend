import React from "react";

const SmallHeading = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  return <h2 className={`text-xl ${className}`}>{text}</h2>;
};

export default SmallHeading;
