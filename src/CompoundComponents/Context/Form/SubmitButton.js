import React from "react";
import { useFormContext } from "./Form";

const SubmitButton = (props) => {
  const { children } = props;
  const { submit } = useFormContext();

  return (
    <button onClick={submit} type="text">
      {children}
    </button>
  );
};

export default SubmitButton;