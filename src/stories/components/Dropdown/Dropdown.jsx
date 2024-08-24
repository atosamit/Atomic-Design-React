import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Dropdown.css';

const Dropdown = ({ options, onSelect, defaultValue }) => {
  const [selectedOption, setSelectedOption] = useState(defaultValue);

  const handleSelect = (option) => {
    setSelectedOption(option);
    onSelect(option);
  };

  return (
    <select
      className="dropdown"
      value={selectedOption}
      onChange={(e) => handleSelect(e.target.value)}
    >
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

Dropdown.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onSelect: PropTypes.func.isRequired,
  defaultValue: PropTypes.string,
};

Dropdown.defaultProps = {
  defaultValue: '',
};

export default Dropdown;
