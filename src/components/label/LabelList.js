import React from 'react';
import PropTypes from 'prop-types';

const LabelList = (props) => {
  const { labels } = props;
  if (labels === null) return <div></div>;
  return (
    <div>
      <ul>
        {labels.map((label) => (
          <li className='label li' key={label.id}>
            {label.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

LabelList.defaultProps = {
  labels: [
    { id: 1, label: '听' },
    { id: 2, label: '说' },
    { id: 3, label: '读' },
    { id: 4, label: '写' },
  ],
};
LabelList.propTypes = {
  labels: PropTypes.array.isRequired,
};

export default LabelList;
