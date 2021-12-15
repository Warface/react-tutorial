import React from "react";
import { useState, useEffect } from "react";
import './counter.css';

function Counter() {

  const savedCount = localStorage.getItem("count") ? localStorage.getItem("count") : 0;
  const [count, setCount] =  React.useState(parseFloat(savedCount));

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  const updateCounter = () => {
    setCount(count + 1)
    localStorage.setItem("count", count + 1);
  }

  const resetCounter = () => {
    setCount(0)
    localStorage.setItem("count", 0);
  }

  return (
    <div>
      <p>You clicked {count} times</p>
      <button className="btn--updateCounter" onClick={updateCounter}>
        Add + 1
      </button>
      <button className="btn--resetCounter" onClick={resetCounter}>
        Reset
      </button>
    </div>
  );

}

export default Counter;
