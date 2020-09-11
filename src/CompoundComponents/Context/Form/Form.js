/** eslint-disabled react-hooks/exhaustive-deps */
import React, { useState } from "react";

const FormContext = React.createContext();

export default function Form(props) {
  const { children, initialValues, onSubmit, validate } = props;
  const [values, setValues] = useState(initialValues);
  const [errors, setErros] = useState({});

  const change = (e) => {
    const { name, value } = e.target;

    setValues((prevValues) => {
      return {
        ...prevValues,
        [name]: value,
      };
    });
  };

  const submit = async (e) => {
    e.preventDefault();

    const isValid = validator();

    if (isValid && typeof onSubmit === "function") {
      await onSubmit({
        values,
      });
    }
  };

  const fields = Object.keys(values);

  const validator = () => {
    const errors = {};
  
    fields.forEach((field) => {
      const fieldValidate = validate[field];
      const fieldError = fieldValidate ? fieldValidate(values) : "";

      if (fieldError) {
        errors[field] = fieldError;
      }
    });

    const isValid = Object.keys(errors).length === 0;

    setErros(errors);

    return isValid;
  };

  const value = React.useMemo(() => ({ values, change, submit, errors }), [
    values,
    errors,
  ]);

  return (
    <FormContext.Provider value={value}>
      <form>{children}</form>
    </FormContext.Provider>
  );
}

export const useFormContext = () => {
  const context = React.useContext(FormContext);
  if (!context) {
    throw new Error(
      `Form compound components cannot be rendered outside the Form component`
    );
  }
  return context;
};
