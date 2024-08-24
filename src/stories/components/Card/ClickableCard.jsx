import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

const ClickableCard = ({ title, content, imageUrl, onClick }) => {
  return (
    <div className="card clickable" onClick={onClick}>
      {imageUrl && <img src={imageUrl} alt={title} className="card-image" />}
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-text">{content}</p>
      </div>
    </div>
  );
};

ClickableCard.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  imageUrl: PropTypes.string,
  onClick: PropTypes.func,
};

ClickableCard.defaultProps = {
  imageUrl: null,
  onClick: () => {},
};

export default ClickableCard;
