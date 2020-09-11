import React from "react";
import { useRadioContext } from "./RadioGroup";

export default function Radio(props) {
  const { value, children } = props;
  const { currentValue, onChange } = useRadioContext(value);

  return (
    <div>
      <label>
        <input
          checked={value === currentValue}
          value={value}
          onClick={onChange}
          type="radio"
        />
        {children}
      </label>
    </div>
  );
}
