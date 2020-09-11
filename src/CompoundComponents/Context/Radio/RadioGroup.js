/** eslint-disabled react-hooks/exhaustive-deps */
import React from "react";

const RadioContext = React.createContext();

export default function RadioGroup(props) {
  const { children, value, onChange, name } = props;

  const handleChange = (event) => {
    onChange && onChange(event.target.value, name);
  };

  return (
    <RadioContext.Provider
      value={{ currentValue: value, onChange: handleChange }}
    >
      {children}
    </RadioContext.Provider>
  );
}

export const useRadioContext = () => {
  const context = React.useContext(RadioContext);
  if (!context) {
    throw new Error(
      `Radio compound components cannot be rendered outside the Toggle component`
    );
  }
  return context;
};
