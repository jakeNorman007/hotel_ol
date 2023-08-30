import React from "react";

function Stat({ icon, title, value, color }) {
  return (
    <div>
      <div color={color}>{icon}</div>
      <p>{title}</p>
      <p>{value}</p>
    </div>
  );
}

export default Stat;
