import React from 'react';
import PropTypes from 'prop-types';

const LabelItem = (props) => {
  const { label } = props;
  return <li className='label'>{label}</li>;
};

LabelItem.defaultProps = {
  label: 'hey',
};

LabelItem.propTypes = {
  label: PropTypes.string.isRequired,
};
export default LabelItem;
