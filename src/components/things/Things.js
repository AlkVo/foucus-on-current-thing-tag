import React from 'react';
import ThingItem from './ThingItem';
const Things = (props) => {
  const { things } = props;
  return (
    <ul>
      {things.map((thing) => (
        <ThingItem key={thing.id} thing={thing.name} />
      ))}
    </ul>
  );
};

Things.defaultProps = {
  things: [
    { id: 1, name: '第 1 件事' },
    { id: 2, name: '第 2 件事' },
    { id: 3, name: '第 3 件事' },
  ],
};

export default Things;
