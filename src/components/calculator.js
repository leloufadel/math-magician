import React from 'react';
import './calculator.css';

const Calculator = () => {
  const btnValues = ['AC', '+/-', '%', '\u00F7', '7', '8', '9',
    'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];

  return (
    <div className="calculator-grid">
      <div className="output">
        0
        <div className="previous-operand" />
        <div className="current-operand" />
      </div>
      {btnValues.map((value) => {
        if (value === '0') {
          return (
            <button key={value} className="span-two" type="button">
              {value}
            </button>
          );
        } if (value === '=' || value === '+' || value === '-' || value === 'x' || value === '\u00F7') {
          return (
            <button key={value} className="orange-button" type="button">
              {value}
            </button>
          );
        }
        return (
          <button key={value} type="button">
            {value}
          </button>
        );
      })}
    </div>
  );
};

export default Calculator;
