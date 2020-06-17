import React from 'react';
import './App.css';
import AddThingForm from './components/things/AddThingForm';
import Things from './components/things/Things';

function App() {
  return (
    <div className='App'>
      <AddThingForm />
      <br />
      <Things />
    </div>
  );
}

export default App;
