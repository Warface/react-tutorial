import React, { useState } from "react";
import "./search.css";

function Search() {
  const [searchValue, setSearchValue] = useState("");

  const submitSearch = () => {
    console.log(searchValue);
    document.getElementsByClassName("search-input")[0].value = "";
    setSearchValue("");
  };

  return (
    <div className="search-form">
      <input
        type="text"
        className="search-input"
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <button className="search-submit" onClick={submitSearch}>
        Search
      </button>
    </div>
  );
}

export default Search;
