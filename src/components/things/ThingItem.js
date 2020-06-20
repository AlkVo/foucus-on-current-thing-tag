import React from 'react';

const ThingItem = (props) => {
  const { id, name } = props.thing;

  return (
    <form>
      <input type='checkbox' id={`thing item ${id}`} />
      <label htmlFor={`thing item ${id}`}> {name}</label>
    </form>
  );
};

export default ThingItem;
