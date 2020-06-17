import React, { Fragment } from 'react';
import LabelList from '../label/LabelList';

const AddThingForm = () => {
  const onSubmit = () => {};
  return (
    <Fragment>
      <form onSubmit={onSubmit}>
        <input placeholder='请输入当前要做的事情' />
        <button>添加</button>
        <br />

        <div className='add-container label'>
          <label htmlFor='labelList'>标签</label>
          <LabelList id='labelList' />
        </div>
      </form>
    </Fragment>
  );
};

export default AddThingForm;
