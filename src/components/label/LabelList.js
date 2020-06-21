import React from 'react';
import LabelItem from './LabelItem';
import PropTypes from 'prop-types';

const LabelList = (props) => {
  const { labels } = props;
  if (labels === null || labels.length === 0) return <div></div>;
  return (
    <ul className='label-component'>
      {labels.map((label, index) => (
        <LabelItem key={index} label={label} />
      ))}
    </ul>
  );
};

LabelList.defaultProps = {
  labels: ['听', '说', '读', '写'],
};
LabelList.propTypes = {
  labels: PropTypes.array.isRequired,
};

export default LabelList;
