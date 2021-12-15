import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./search.css";

function Search() {
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  const submitSearch = () => {
      navigate(`/search/${searchValue}`)
      clearSearch();
  };

  const clearSearch = () => {
    document.getElementsByClassName("search-input")[0].value = "";
    setSearchValue("");
  };

  return (
    <div className="search-form">
      <input
        type="text"
        className="search-input"
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            submitSearch();
          }
        }}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <button className="search-submit" onClick={submitSearch}>
        Search
      </button>
    </div>
  );
}

export default Search;
