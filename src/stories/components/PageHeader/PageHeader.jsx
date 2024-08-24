import React from 'react';
import PropTypes from 'prop-types';
import './PageHeader.css';

const PageHeader = ({ title, menuItems }) => {
  return (
    <header className="page-header">
      <div className="title">{title}</div>
      <nav>
        <ul className="nav-menu">
          {menuItems.map((item, index) => (
            <li key={index} className="nav-item">
              <a href={item.link} className="nav-link">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default PageHeader;
