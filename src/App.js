import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navz from "./Components/Nav/Navz";
import Home from "./Sections/Home/Home";
import Counter from "./Sections/Counter/Counter";
import SearchResults from "./Sections/SearchResults/SearchResults";
import { Container, Row, Col } from "react-bootstrap";
import ListUsers from "./Sections/ListUsers/ListUsers";
import "./dist/output.css";

function App() {
  return (
    <Router>
        <Navz />
        <Container className="my-5">
          <Row>
            <Col>
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/counter" element={<Counter />} />
                <Route path="/listusers" element={<ListUsers />} >
                  <Route path="/listusers/:limit" element={<ListUsers />} />
                  <Route path="/listusers/search/:search" element={<ListUsers />} />
                </Route>
              </Routes>
            </Col>
          </Row>
        </Container>
    </Router>
  );
}

export default App;
