import React from "react";

const Search = props => {
  const search = event => props.search(event.target.value);

  return (
    <div>
      Search country name: <input onChange={search} />
    </div>
  );
};

export default Search;
