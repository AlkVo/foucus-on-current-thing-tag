import React, { Fragment } from 'react';
import LabelList from '../label/LabelList';
import AddLabel from '../label/AddLabel';
const LabelForm = () => {
  return (
    <Fragment>
      <LabelList />
      <AddLabel />
    </Fragment>
  );
};

export default LabelForm;
