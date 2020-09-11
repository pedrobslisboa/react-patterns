import React from "react";

export default function RadioGroup(props) {
  const { children, value, onChange, name } = props;

  return React.Children.map(children, (child) => {
    const { value: childValue } = child.props;
    return React.cloneElement(child, {
      name,
      checked: value === childValue,
      onClick: onChange,
    });
  });
}
