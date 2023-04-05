import React from "react";

const InputBox = ({
  type,
  className,
  placeholder,
}: {
  type: string;
  className?: string;
  placeholder?: string;
}) => {
  return (
    <div>
      <input type={type} className={`${className}`} placeholder={placeholder} />
    </div>
  );
};

export default InputBox;
