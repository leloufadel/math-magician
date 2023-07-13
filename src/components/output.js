import React from 'react';
import PropTypes from 'prop-types';
import './calculator.css';

const Output = ({ next, operation, total }) => (
  <div className="output">
    {next || operation || total || 0}
    <div className="previous-operand" />
    <div className="current-operand" />
  </div>
);

Output.propTypes = {
  next: PropTypes.string,
  operation: PropTypes.string,
  total: PropTypes.string,
};

Output.defaultProps = {
  next: '',
  operation: '',
  total: '',
};

export default Output;
