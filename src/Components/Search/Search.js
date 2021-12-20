import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Search() {
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  const submitSearch = () => {
      navigate(`/listusers/search/${searchValue}`)
      clearSearch();
  };

  const clearSearch = () => {
    document.getElementsByClassName("search-input")[0].value = "";
    setSearchValue("");
  };

  return (
    <div className="">
      <input
        type="text"
        className="p-1"
        placeholder="Search a user"
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            submitSearch();
          }
        }}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <button type="submit" className="bg-cyan-600 p-1 text-white hover:bg-white hover:text-cyan-600" onClick={submitSearch}>
        Search
      </button>
    </div>
  );
}

export default Search;
