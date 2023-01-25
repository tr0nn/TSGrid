import React from 'react';
import { useState } from 'react';
import MainTipCalculator from './MainTipCalculator';
import '../index.css';

export default function AppTipCalculator() {
  const [tipBtn, setTipBtn] = useState(false);
  return (
    <div className="tipDiv">
      <button
        className="tipButton"
        onClick={() => {
          setTipBtn(!tipBtn);
        }}
      >
        Tip Calculator
      </button>
      {tipBtn ? <MainTipCalculator /> : null}
    </div>
  );
}
