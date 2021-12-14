import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav/Nav";
import Header from "./Components/Header/Header";
import Home from "./Sections/Home/Home";
import Counter from "./Sections/Counter/Counter";

function App() {
  return (
    <Router>
      <main>
        <Nav />
        <Header />
        <div className="main-content">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/counter" element={<Counter />} />
          </Routes>
        </div>
      </main>
    </Router>
  );
}

export default App;
