import React, { useState, useEffect } from 'react';
import './styles.css';
import Count from './Count';
import Width from './Width';

// useCounter is our created hook
function useCounter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return { count, increment, decrement };
}

function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.addEventListener('resize', handleResize);
  });
  return width;
}

function ScreenWidth() {
  const counter = useCounter();
  const width = useWindowWidth();

  return (
    <div className="App">
      <Count
        count={counter.count}
        increment={counter.increment}
        decrement={counter.decrement}
      />
      <div id="divider" />
      <Width width={width} />
    </div>
  );
}

export default function ScreenWidthApp() {
  const [width, setWidth] = useState(false);

  return (
    <div className="widthDiv">
      <button
        className="widthBtn"
        onClick={() => {
          setWidth(!width);
        }}
      >
        screen width
      </button>
      {width ? <ScreenWidth /> : null}
    </div>
  );
}
