import React, { Fragment, useState, useContext } from 'react';
import LabelForm from '../label/LabelForm';
import ThingContext from '../../context/things/ThingContext';

const AddThingForm = () => {
  const thingContext = useContext(ThingContext);
  //从 ThingContext 取出需要的方法
  const { addThing } = thingContext;

  const [thing, setThing] = useState({
    name: '',
    labels: '',
  });

  const { name } = thing;

  const onChange = (e) => {
    setThing({ ...thing, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const newThing = {
      name: name,
      labels: thing.labels,
    };

    addThing(newThing);
  };
  return (
    <Fragment>
      <form onSubmit={onSubmit}>
        <input
          type='text'
          name='name'
          value={name}
          onChange={onChange}
          placeholder='请输入当前要做的事情'
        />
        <input type='submit' value='添加' />
        <br />
        <LabelForm />
      </form>
    </Fragment>
  );
};

export default AddThingForm;
