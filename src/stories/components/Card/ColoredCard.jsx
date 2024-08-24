import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

const ColoredCard = ({ title, content, imageUrl, backgroundColor }) => {
  return (
    <div className="card" style={{ backgroundColor }}>
      {imageUrl && <img src={imageUrl} alt={title} className="card-image" />}
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-text">{content}</p>
      </div>
    </div>
  );
};

ColoredCard.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  imageUrl: PropTypes.string,
  backgroundColor: PropTypes.string,
};

ColoredCard.defaultProps = {
  imageUrl: null,
  backgroundColor: '#fff',
};

export default ColoredCard;
