import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = ({ variant, onClick, children, disabled }) => {
  return (
    <button
      className={`button ${variant}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary', 'danger']),
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  variant: 'primary',
  onClick: () => {},
  disabled: false,
};

export default Button;
