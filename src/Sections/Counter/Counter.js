import React from "react";
import { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import './counter.css';

function Counter() {

  const savedCount = localStorage.getItem("count") ? localStorage.getItem("count") : 0;
  const [count, setCount] =  React.useState(parseFloat(savedCount));

  const updateCounter = () => {
    setCount(count + 1)
    localStorage.setItem("count", count + 1);
  }

  const resetCounter = () => {
    setCount(0)
    localStorage.setItem("count", 0);
  }

  return (
    <Container>
      <Row>
        <Col>
          <h1>Counter</h1>
          <p>You clicked {count} times</p>
          <Button className="bg-cyan-600 p-1 text-white hover:bg-white hover:text-cyan-600 mr-5 my-4" onClick={updateCounter}>
            Add + 1
          </Button>
          <Button className="bg-cyan-600 p-1 text-white hover:bg-white hover:text-cyan-600" onClick={resetCounter}>
            Reset
          </Button>
        </Col>
      </Row>
    </Container>
  );

}

export default Counter;
