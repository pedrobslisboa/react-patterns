import React, { useState } from "react";

import RadioGroup from "./RadioGroup";

export default {
  title: "Simple Component/ Example",
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
      <RadioGroup options={options} value={value} onChange={handleChange} />
  );
};

export const RadioButton = Template.bind({});
