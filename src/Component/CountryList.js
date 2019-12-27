import React from "react";

const CountryList = props => {
  const name = props.name;

  return (
    <div>
      {name} <button onClick={props.show}>Show</button>
    </div>
  );
};

export default CountryList;
