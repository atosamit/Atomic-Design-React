import React from 'react';
import PropTypes from 'prop-types';
import './Modal.css';

const Modal = ({ show, onClose, title, content, variant }) => {
  if (!show) {
    return null;
  }

  const renderContent = () => {
    switch (variant) {
      case 'bullet':
        return (
          <ul>
            {content.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        );
      case 'number':
        return (
          <ol>
            {content.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ol>
        );
      case 'description':
        return content.map((item, index) => (
          <div key={index}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ));
      default:
        return <p>{content}</p>;
    }
  };

  return (
    <div className="modal-strip">
      <div className="modal-content">
        <div className="modal-header">
          <h2>{title}</h2>
          <button className="close-button" onClick={onClose}>
            &times;
          </button>
        </div>
        <div className="modal-body">{renderContent()}</div>
      </div>
      <div className="arrow-icon" onClick={onClose}>
        &#x2190; {/* Unicode left arrow */}
      </div>
    </div>
  );
};

Modal.propTypes = {
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(
      PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.shape({
          title: PropTypes.string,
          description: PropTypes.string,
        }),
      ])
    ),
  ]).isRequired,
  variant: PropTypes.oneOf(['default', 'bullet', 'number', 'description']),
};

Modal.defaultProps = {
  variant: 'default',
};

export default Modal;
