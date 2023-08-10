import React from "react";

function Selector({ options, value, onChange, ...props }) {
  return (
    <select
      className="border-none py-[0.6rem] bg-slate-100 shadow-sm shadow-black/50 rounded-md text-slate-600 font-medium"
      value={value}
      onChange={onChange}
      {...props}
    >
      {options.map((option) => (
        <option value={option.value} key={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

export default Selector;
