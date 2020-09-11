/** eslint-disabled react-hooks/exhaustive-deps */
import React, { useState } from "react";

const transformErrorsIntoValidation = (errors) =>
  Object.entries(errors).reduce((result, [field, error]) => {
    return { ...result, [field]: !error };
  }, {});

const FormContext = React.createContext();

function useEffectAfterMount(cb, dependencies) {
  const justMounted = React.useRef(true);
  React.useEffect(() => {
    if (!justMounted.current) {
      return cb();
    }
    justMounted.current = false;
  }, dependencies);
}

export default function Form(props) {
  const { children, initialValues, onSubmit, validate } = props;
  const [values, setValues] = useState(initialValues);
  const [validation, setValidation] = useState(validate || {});
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

    const { onSubmit } = props;
    const isValid = validator();
    console.log(errors);

    if (isValid && typeof onSubmit === "function") {
      const submission = await onSubmit({
        values,
      });
    }
  };

  const fields = Object.keys(values);

  const validator = () => {
    const { validate } = props;
    const errors = {};
    const validation = {};

    fields.forEach((field) => {
      const fieldValidate = validate[field];
      const fieldError = fieldValidate ? fieldValidate(values) : "";
      console.log(fieldError);
      if (fieldError) {
        errors[field] = fieldError;
        validation[field] = false;
      } else {
        validation[field] = true;
      }
    });

    const isValid = Object.keys(errors).length === 0;

    setErros(errors);
    console.log(validation)
    setValidation(validation);

    return isValid;
  };

  useEffectAfterMount(() => {
    onSubmit && onSubmit(values);
  }, [values]);

  const value = React.useMemo(
    () => ({ values, change, submit, validate, errors }),
    [values, errors]
  );

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
      `Form compound components cannot be rendered outside the Toggle component`
    );
  }
  return context;
};
