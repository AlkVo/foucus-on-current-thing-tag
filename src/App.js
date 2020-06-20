import React from 'react';
import './App.css';
import AddThingForm from './components/things/AddThingForm';
import ToDoTings from './components/things/ToDoTings';
import CurrentThing from './components/things/CurrentThing';
import HistoryThings from './components/things/HistoryThings';

function App() {
  return (
    <div className='App'>
      添加表单
      <AddThingForm />
      <br />
      当前要做
      <CurrentThing />
      待办列表
      <ToDoTings />
      历史
      <HistoryThings />
    </div>
  );
}

export default App;
