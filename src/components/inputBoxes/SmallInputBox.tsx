import React, { ChangeEventHandler, InputHTMLAttributes } from "react";

const SmallInputBox = ({
  type,
  className,
  placeholder,
  handleChange,
  value,
  name,
}: {
  type: string;
  className?: string;
  placeholder?: string;
  handleChange?: ChangeEventHandler<HTMLInputElement>;
  value?: any;
  name?: string;
}) => {
  return (
    <div className="">
      <input
        name={name}
        value={value}
        onChange={handleChange}
        type={type}
        className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${className}`}
        placeholder={placeholder}
        required
      ></input>
    </div>
  );
};

export default SmallInputBox;
