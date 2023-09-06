import React from "react";

function Stat({ icon, title, value }) {
  return (
    <div className="flex items-center place-content-beginning gap-2 px-6 py-4">
      <div className="text-5xl bg-amber-600 px-2 py-2 rounded-full">{icon}</div>
      <div className="flex gap-2 px-9 items-center text-white">
        <p className="text-xl font-semibold">{title}</p> -
        <p className="text-xl font-semibold">{value}</p>
      </div>
    </div>
  );
}

export default Stat;
