import React from "react";

const Tag = ({ text, color }: { text: string; color: string }) => {
  return (
    <p
      className={`px-2 py-1 w-fit rounded-md text-${color}-600 border border-${color}-600`}
    >
      {text}
    </p>
  );
};

export default Tag;
