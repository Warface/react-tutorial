import React from "react";
import { useParams } from "react-router-dom";
import "./searchResults.css";

function SearchResults() {
  let { search } = useParams();
  return (
    <section id="search-results">
      <div className="results">
        <h1>Search results for: {search}</h1>
      </div>
    </section>
  );
}

export default SearchResults;
