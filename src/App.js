import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav/Nav";
import Home from "./Sections/Home/Home";
//import Counter from "./Sections/Counter/Counter";
import SearchResults from "./Sections/SearchResults/SearchResults";
import ListUsers from "./Sections/ListUsers/ListUsers";
import "./style.css";

function App() {
  return (
    <Router>
      <main>
        <Nav />
        <div className="main-content">
          <Routes>
            <Route exact path="/" element={<Home />} />
            {/* <Route path="/counter" element={<Counter />} /> */}
            <Route path="/listusers" element={<ListUsers />} >
              <Route path="/listusers/:limit" element={<ListUsers />} />
            </Route>
            <Route path="/search/:search" element={<SearchResults />} />
          </Routes>
        </div>
      </main>
    </Router>
  );
}

export default App;
