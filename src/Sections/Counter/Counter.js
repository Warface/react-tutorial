import React from "react";
import { useState, useEffect } from "react";

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

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={updateCounter}>
        Click me
      </button>
    </div>
  );

}

export default Counter;
