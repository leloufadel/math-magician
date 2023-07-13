import React, { useState } from 'react';
import './calculator.css';
import Output from './output';
import calculate from '../logic/calculate';

const btnValues = ['AC', '+/-', '%', '\u00F7', '7', '8', '9',
  'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];

function Calculator() {
  const [state, setState] = useState({ total: null, next: null, operation: null });

  const handleClick = (btnValue) => {
    setState(calculate(state, btnValue));
  };

  return (
    <div className="calculator-grid">
      <Output next={state.next} operation={state.operation} total={state.total} />
      {btnValues.map((value) => {
        if (value === '0') {
          return (
            <button key={value} className="span-two" type="button" onClick={() => handleClick(value)}>
              {value}
            </button>
          );
        } if (value === '=' || value === '+' || value === '-' || value === 'x' || value === '\u00F7') {
          return (
            <button key={value} className="orange-button" type="button" onClick={() => handleClick(value)}>
              {value}
            </button>
          );
        }
        return (
          <button key={value} type="button" onClick={() => handleClick(value)}>
            {value}
          </button>
        );
      })}
    </div>
  );
}

export default Calculator;
