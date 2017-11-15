import React from 'react';
import PropTypes from 'prop-types';

const Panel = ({ children, title }) => (
  <div>
    {title &&
      <header>
        <h1>{title}</h1>
      </header>}
    {children &&
      <div>
        {children}
      </div>}
  </div>
);

Panel.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

Panel.defaultProps = {
  title: null,
  children: null,
};

export default Panel;
