import React from 'react';
import PropTypes from 'prop-types';

const CurrentTime = ({ time }) => {
  if (time === null || time.length === 0) return null;
  const date = new Date(time[0][0]);
  return (
    <span className='time create'>
      创建时间:{' '}
      {`${date.getFullYear()}-${
        date.getMonth() + 1
      }-${date.getDate()}${date.getHours()}:${date.getMinutes()}`}
    </span>
  );
};

CurrentTime.defaultProps = {
  time: [[1592480475000, 1592484075000]],
};
CurrentTime.propTypes = {
  time: PropTypes.array.isRequired,
};

export default CurrentTime;
