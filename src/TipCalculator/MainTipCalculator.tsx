import React from 'react';
import { useState, useEffect } from 'react';

export default function MainTipCalculator() {
  const [bill, setBill] = useState<number>();
  const [people, setPeople] = useState<number>();
  const [tip, setTip] = useState<number>();

  const [peopleError, setPeopleError] = useState('');

  const tipAmount = ((bill * tip) / people).toFixed(2);
  const totalPerPerson = ((bill * (1 + tip)) / people).toFixed(2);

  useEffect(() => {
    if (people === 0) {
      setPeopleError(`can't be Zero`);
    } else {
      setPeopleError('');
    }
  }, [people]);
  return (
    <div>
      <div>bill : {bill}</div>
      <div>peope : {people}</div>
      <div>tip : {tip}</div>

      <input
        placeholder="bill"
        type="number"
        value={bill}
        onChange={e => {
          setBill(e.target.valueAsNumber);
        }}
      />
      <button
        onClick={() => {
          setTip(0.05);
        }}
      >
        5%
      </button>
      <button
        onClick={() => {
          setTip(0.1);
        }}
      >
        10%
      </button>
      <button
        onClick={() => {
          setTip(0.15);
        }}
      >
        15%
      </button>
      <button
        onClick={() => {
          setTip(0.25);
        }}
      >
        25%
      </button>
      <button
        onClick={() => {
          setTip(0.5);
        }}
      >
        50%
      </button>

      <input
        placeholder="number of people"
        type="number"
        value={people}
        // then press on keyboard . dont write
        onKeyDown={e => {
          if (e.key === '.') {
            e.preventDefault();
          }
        }}
        onChange={e => {
          setPeople(e.target.valueAsNumber);
        }}
      />
      {peopleError}

      <div>
        tip amount / person :{'$'}
        {tipAmount === 'NaN' || tipAmount === 'Infinity' ? '$0.00' : tipAmount}
      </div>
      <div>
        total / person :{'$'}
        {totalPerPerson === 'NaN' || totalPerPerson === 'Infinity'
          ? '$0.00'
          : totalPerPerson}
      </div>
    </div>
  );
}
