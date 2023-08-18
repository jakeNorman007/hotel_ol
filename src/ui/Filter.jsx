import React from "react";
import { useSearchParams } from "react-router-dom";

function Filter({filterField, options}) {
  const [searchParams, setSearchParams] = useSearchParams();

  // this sets the name of the paramater as filterField, where the value can be all, discount, no discount and it then
  // modifes the url to include said value which uses logic to filter the entries based on those parameters. This
  // (useSearchParams is similar to useState, but comes from React Router. filterField is used here and passed to
  // roomTableOps which the filter takes the filterField of discount so you can reuse the Filter component and nothing
  // is hard coded in there.
  function handleClick(value) {
    searchParams.set(filterField, value);
    if(searchParams.get('page')) searchParams.set('page', 1);
    setSearchParams(searchParams);
  }

  return (
    <div className="flex gap-[0.4rem] bg-slate-100 p-[0.4rem] rounded-md shadow-sm shadow-black/50">
      {options.map((option) => (
      <button
        className="rounded-md font-medium text-slate-600 px-2 py-1 hover:bg-blue-300 hover:shadow-sm
                hover:shadow-black/50 focus:bg-blue-300 focus:shadow-sm focus:shadow-black/50"
        key={option.value}
        onClick={() => handleClick(option.value)}>
      {option.label}
      </button>
      ))}
    </div>
  );
}

export default Filter;
