import React from "react";

import Form from "./Form";
import TextField from "./TextField";
import SubmitButton from "./SubmitButton";

export default {
  title: "Compound Components/Context/Form",
};

export const FormContext = () => {
  const validate = {
    developer({ developer }) {
      if (!developer) {
        return "Developer field is required";
      }

      return "";
    },
  };

  const onSubmit = async ({ values }) => {
    const { developer, designer } = values;

    alert(`
    Designer: ${designer}
    Developer: ${developer}
    `);
  };

  return (
    <>
      <Form
        initialValues={{
          developer: "",
          designer: "",
        }}
        validate={validate}
        onSubmit={onSubmit}
      >
        <TextField name="developer" label="Developer" />
        <TextField name="designer" label="Designer" />
        <SubmitButton>Submit</SubmitButton>
      </Form>
    </>
  );
};

// export const RadioButton = Template.bind({});
