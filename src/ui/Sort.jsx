import React from "react";
import Selector from "../ui/Selector";
import { useSearchParams } from "react-router-dom";

// this function recieves a list of options
function Sort({ options }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const sort = searchParams.get("sort") || "";

  // this is just about the same thing as the Filter component in ../ui, sets the name of the parameter as sort and then sort is
  // equal to the event change handler, so when setSearchParams is set it is set to the sort filter
  function handleChange(event) {
    searchParams.set("sort", event.target.value);
    setSearchParams(searchParams);
  }

  return <Selector options={options} value={sort} onChange={handleChange}/>;
}

export default Sort;
