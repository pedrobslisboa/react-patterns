import React from "react";
import Radio from "./Radio";

export default function RadioGroup(props) {
  const { value, onChange, options } = props;

  return (
    <div>
      {options.map(({ value: optionValue, label }) => (
        <Radio
          checked={value === optionValue}
          onClick={onChange}
          value={optionValue}
        >
          {label}
        </Radio>
      ))}
    </div>
  );
}
