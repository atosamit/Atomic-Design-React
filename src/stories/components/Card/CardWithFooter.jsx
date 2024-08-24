import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

const CardWithFooter = ({ title, content, imageUrl, footer }) => {
  return (
    <div className="card">
      {imageUrl && <img src={imageUrl} alt={title} className="card-image" />}
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-text">{content}</p>
      </div>
      {footer && <div className="card-footer">{footer}</div>}
    </div>
  );
};

CardWithFooter.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  imageUrl: PropTypes.string,
  footer: PropTypes.node,
};

CardWithFooter.defaultProps = {
  imageUrl: null,
  footer: null,
};

export default CardWithFooter;
