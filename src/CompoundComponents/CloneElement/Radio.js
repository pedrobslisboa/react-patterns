import React from "react";

export default function Radio(props) {
  const { children, checked, onClick, value, name } = props;

  return (
    <div>
      <label>
        <input
          name={name}
          checked={checked}
          value={value}
          onClick={onClick}
          type="radio"
        />
        {children}
      </label>
    </div>
  );
}
