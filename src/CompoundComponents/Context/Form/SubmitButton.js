import React from "react";
import { useFormContext } from "./Form";

const SubmitButton = (props) => {
  const { name, children } = props;
  const { submit, validate } = useFormContext();

  return (
    <button onClick={submit} type="text">
      {children}
    </button>
  );
};

export default SubmitButton;