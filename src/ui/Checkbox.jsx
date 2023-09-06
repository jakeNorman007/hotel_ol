import React from "react";

function Checkbox({ children, onChange, checked, disabled = false, id }) {
  return (
    <div>
      <input
        type="checkbox"
        id={id}
        onChange={onChange}
        checked={checked}
        disabled={disabled}
      />
      <label htmlFor={!disabled ? id : ""}>{children}</label>
    </div>
  );
}

export default Checkbox;
