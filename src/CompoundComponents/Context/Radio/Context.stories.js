import React, { useState } from "react";

import RadioGroup from "./RadioGroup";
import Radio from "./Radio";

export default {
  title: "Compound Components/Context/Radio",
  component: RadioGroup,
  argTypes: {
    backgroundColor: { controls: "color" },
  },
};

export const RadioButton = () => {
  const [values, setValues] = useState({
    developer: "Pedro",
    designer: "Isabel",
  });

  const handleChange = (value, name) => {
    setValues((values) => ({
      ...values,
      [name]: value,
    }));
  };

  return (
    <>
      <label>Developer:</label>
      <RadioGroup
        value={values.developer}
        name="developer"
        onChange={handleChange}
      >
        <Radio value="Pedro">Pedro</Radio>
        <Radio value="Danilo">Danilo</Radio>
        <Radio value="André">André</Radio>
      </RadioGroup>
      <br />
      <label>Designer:</label>
      <RadioGroup
        value={values.designer}
        name="designer"
        onChange={handleChange}
      >
        <Radio value="Isabel">Isabel</Radio>
        <Radio value="André">André</Radio>
        <Radio value="Mario">Mario</Radio>
      </RadioGroup>
      <br />
      <h2>Team</h2>
      <ul>
        <li>
          Developer: <b>{values.developer}</b>
        </li>
        <li>
          Designer: <b>{values.designer}</b>
        </li>
      </ul>
    </>
  );
};
// export const RadioButton = Template.bind({});