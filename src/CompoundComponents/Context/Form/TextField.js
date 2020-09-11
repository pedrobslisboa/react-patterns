import React from "react";
import { useFormContext } from "./Form";

export const TextField = (props) => {
  const { name, label } = props;
  const { values, change, errors } = useFormContext();
  console.log(errors);

  return (
    <label>
      {label}
      <br />
      <input name={name} value={values[name]} onChange={change} type="text" />
      <br />
      {errors[name]}
      <br />
    </label>
  );
};

export default TextField;
