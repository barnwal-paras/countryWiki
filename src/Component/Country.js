import React from "react";

const Country = props => {
  const data = props.data;

  return (
    <div>
      <h1>{data.name}</h1>
      <img src={data.flag} />
      <div>Capital: {data.capital}</div>
      <div>Population: {data.population}</div>
      <div>
        <span>
          Languages:{" "}
          {data.languages.map(lang => (
            <a>{lang.name},</a>
          ))}
        </span>
      </div>
    </div>
  );
};

export default Country;
