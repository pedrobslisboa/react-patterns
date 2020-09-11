import React from "react";
import Radio from "../Radio/Radio";

export default function RadioGroup(props) {
  const { value, onChange, options, renderRadio } = props;

  return (
    <div>
      {options.map(({ value: optionValue, label }) =>
        renderRadio({
          checked: value === optionValue,
          onClick: onChange,
          value: optionValue,
          label,
        })
      )}
    </div>
  );
}
