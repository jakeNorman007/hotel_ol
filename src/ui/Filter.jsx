import React from "react";
import { useSearchParams } from "react-router-dom";

function Filter({ filterField, options }) {
  const [searchParams, setSearchParams] = useSearchParams();

  // this sets the name of the paramater as filterField, where the value can be all, discount, no discount and it then
  // modifes the url to include said value which uses logic to filter the entries based on those parameters. This
  // (useSearchParams is similar to useState, but comes from React Router. filterField is used here and passed to
  // roomTableOps which the filter takes the filterField of discount so you can reuse the Filter component and nothing
  // is hard coded in there.
  function handleClick(value) {
    searchParams.set(filterField, value);
    if (searchParams.get("page")) searchParams.set("page", 2);
    setSearchParams(searchParams);
  }

  return (
    <div className="flex gap-[0.4rem] bg-gray-700 p-[0.4rem] rounded-md border-2 border-gray-400 shadow-lg shadow-gray-800">
      {options.map((option) => (
        <button
          className="rounded-md font-medium text-white px-2 py-1  hover:bg-amber-600 hover:shadow-sm
                 focus:bg-amber-600"
          key={option.value}
          onClick={() => handleClick(option.value)}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}

export default Filter;
