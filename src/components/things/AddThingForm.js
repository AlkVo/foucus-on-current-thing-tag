import React, { Fragment } from 'react';
import LabelForm from '../label/LabelForm';

const AddThingForm = () => {
  const onSubmit = () => {};
  return (
    <Fragment>
      <form onSubmit={onSubmit}>
        <input placeholder='请输入当前要做的事情' />
        <button>添加</button>
        <br />
        <LabelForm />
      </form>
    </Fragment>
  );
};

export default AddThingForm;
