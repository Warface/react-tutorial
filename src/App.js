import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav/Nav";
import Home from "./Sections/Home/Home";
import Counter from "./Sections/Counter/Counter";
import SearchResults from "./Sections/SearchResults/SearchResults";
import "./style.css";

function App() {
  return (
    <Router>
      <main>
        <Nav />
        <div className="main-content">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/counter" element={<Counter />} />
            <Route path="/search/:string" element={<SearchResults />} />
          </Routes>
        </div>
      </main>
    </Router>
  );
}

export default App;
