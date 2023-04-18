import React from "react";
import SmallInputBox from "./SmallInputBox";

type LabelAndInputProps = {
  label?: string;
  inputType: string;
  placeholder: string;
  handleChange?: (event: {
    target: {
      name: any;
      value: any;
    };
  }) => void;
  name: string;
  value: string;
};

const LabelAndInput: React.FunctionComponent<LabelAndInputProps> = ({
  label,
  inputType,
  placeholder,
  handleChange,
  name,
  value,
}) => {
  return (
    <div className="flex flex-col space-y-2">
      <h2 className="text-2xl">{label}</h2>
      <SmallInputBox
        type={inputType}
        placeholder={placeholder}
        handleChange={handleChange}
        name={name}
        value={value}
      />
    </div>
  );
};

export default LabelAndInput;
