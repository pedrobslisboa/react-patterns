import React from "react";

export default function Radio(props) {
  const { children, checked, onClick, value } = props;

  return (
    <div>
      <label>
        <input checked={checked} value={value} onClick={onClick} type="radio" />
        {children}
      </label>
    </div>
  );
}
