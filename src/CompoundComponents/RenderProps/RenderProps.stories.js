import React, { useState } from "react";

import RadioGroup from "./RadioGroup/RadioGroup";
import Radio from "./Radio/Radio";

export default {
  title: "Render Props/ Example",
  component: RadioGroup,
};

const options = [
  {
    value: "pedro",
    label: "Pedro",
  },
  {
    value: "danilo",
    label: "Danilo",
  },
  {
    value: "andre",
    label: "André",
  },
];

const Template = (args) => {
  const [value, setValue] = useState('pedro');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <>
      <RadioGroup
        options={options}
        value={value}
        onChange={handleChange}
        renderRadio={({label, checked, onClick, value}) => (
          <Radio checked={checked} onClick={onClick} value={value}>
            {label}
          </Radio>
        )}
      />
    </>
  );
};

export const RadioButton = Template.bind({});
