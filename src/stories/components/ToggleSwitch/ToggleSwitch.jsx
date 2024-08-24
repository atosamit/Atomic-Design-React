import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './ToggleSwitch.css';

const ToggleSwitch = ({ label, initialValue, onChange, color }) => {
  const [checked, setChecked] = useState(initialValue);

  const handleChange = () => {
    const newValue = !checked;
    setChecked(newValue);
    onChange(newValue);
  };

  return (
    <div className="toggle-switch">
      {label && <span className="switch-label">{label}</span>}
      <label className={`switch ${color}`}>
        <input type="checkbox" checked={checked} onChange={handleChange} />
        <span className="slider"></span>
      </label>
    </div>
  );
};

ToggleSwitch.propTypes = {
  label: PropTypes.string,
  initialValue: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  color: PropTypes.oneOf(['default', 'primary', 'success', 'danger']),
};

ToggleSwitch.defaultProps = {
  initialValue: false,
  color: 'default',
};

export default ToggleSwitch;
