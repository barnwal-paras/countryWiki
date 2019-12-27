import React, { useState, useEffect } from "react";
import axios from "axios";
import Search from "./Component/Search";
import Country from "./Component/Country";
import Countrylist from "./Component/CountryList";

function App() {
  const [data, setdata] = useState([]);
  const [text, updatetext] = useState("");
  const [cnt, setcnt] = useState(false);

  const getData = () => {
    axios.get("https://restcountries.eu/rest/v2/all").then(response => {
      console.log(response.data);
      setdata(response.data);
    });
  };

  const search = value => {
    setcnt(false);
    updatetext(value);
  };

  const showCountry = () => {
    if (cnt != false) {
      return <Country data={data.filter(country => country.name == cnt)[0]} />;
    } else {
      return <div></div>;
    }
  };

  const selectCountry = value => {
    setcnt(value);
  };

  const filter = () => {
    if (text == "") {
      return <div>No value provided for search</div>;
    }
    const filtered_data = data.filter(country =>
      country.name.toLowerCase().startsWith(text.toLowerCase())
    );
    if (filtered_data.length == 0) {
      return <div>No country with such name.</div>;
    } else if ((filtered_data.length == 1) & !cnt) {
      selectCountry(filtered_data[0].name);
      return <div></div>;
    } else if (!cnt) {
      // console.log(<Countrylist name="country.name" show="selectCountry" />);
      // console.log(filtered_data.map(country => country.name));
      return filtered_data.map(country => (
        <Countrylist
          name={country.name}
          show={() => selectCountry(country.name)}
        />
      ));
    }
    return <div></div>;
  };

  useEffect(getData, []);
  return (
    <div>
      <Search search={search} />
      {filter()}
      <div>{showCountry()}</div>
    </div>
  );
}

export default App;
