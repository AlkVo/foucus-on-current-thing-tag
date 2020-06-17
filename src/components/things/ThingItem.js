import React from 'react';
import PropTypes from 'prop-types';

const ThingItem = (props) => {
  return <li>{props.thing}</li>;
};

ThingItem.propTypes = {
  thing: PropTypes.string.isRequired,
};
export default ThingItem;
