import React, { Fragment } from 'react';
import ThingItem from './ThingItem';
import PropTypes from 'prop-types';

const HistoryThings = ({ data }) => {
  //待删
  data[0].list.sort(function (a, b) {
    return a.time[0] - b.time[0];
  });

  function getHourMinutesString(front, back) {
    const dateFront = new Date(front);
    const dateBack = new Date(back);
    return `${dateFront.getHours()}:${dateFront.getMinutes()} - ${dateBack.getHours()}:${dateBack.getMinutes()}`;
  }

  return (
    <Fragment>
      {data.map((d) => (
        <div>
          <a>{d.date}</a>
          {d.list.map((node) => (
            <p>
              {getHourMinutesString(node.time[0], node.time[1])}
              <span>{node.name}</span>
            </p>
          ))}
        </div>
      ))}
    </Fragment>
  );
};

HistoryThings.defaultProps = {
  data: [
    {
      date: '2020-6-18',
      list: [
        {
          time: [1592480475000, 1592484075000],
          name: '事件1',
          labels: ['山丘', '饕餮'],
        },
        {
          time: [1592487675000, 1592491275162],
          name: '事件2',
          labels: ['山丘', '饕餮'],
        },
        {
          time: [1592473275000, 1592476875000],
          name: '事件1',
          labels: ['山丘', '饕餮'],
        },
        {
          time: [1592466075000, 1592469675000],
          name: '事件1',
          labels: ['山丘', '饕餮'],
        },
      ],
    },
  ],
};

export default HistoryThings;
