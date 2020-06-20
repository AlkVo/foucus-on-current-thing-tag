import React, { Fragment } from 'react';
import ThingItem from './ThingItem';
import LabelForm from '../label/LabelForm';

const CurrentThing = (props) => {
  return (
    <Fragment>
      <ThingItem thing={props.thing} />
      <LabelForm />
      <br />
    </Fragment>
  );
};

CurrentThing.defaultProps = {
  thing: {
    id: 1,
    name: '第 1 件事',
    date: '2020-6-18',
    time: [[1592480475000, 1592484075000]],
    labels: ['魑魅', '钩吻'],
  },
};

export default CurrentThing;
