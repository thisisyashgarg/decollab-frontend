import React, {
  ChangeEventHandler,
  InputHTMLAttributes,
  MouseEventHandler,
} from "react";

const SmallInputBox = ({
  type,
  className,
  placeholder,
  handleChange,
  onClickLogic,
  value,
  name,
}: {
  type: string;
  className?: string;
  placeholder?: string;
  handleChange?: ChangeEventHandler<HTMLInputElement>;
  onClickLogic?: MouseEventHandler<HTMLInputElement>;
  value?: any;
  name?: string;
}) => {
  return (
    <div>
      <input
        onClick={onClickLogic}
        name={name}
        value={value}
        onChange={handleChange}
        type={type}
        className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5    ${className}`}
        placeholder={placeholder}
        required
      ></input>
    </div>
  );
};

export default SmallInputBox;
