import React, { useReducer } from 'react';
import { v5 as uuidv5 } from 'uuid';
import ThingContext from './ThingContext';
import ThingReducer from './ThingReducer';

import { ADD_THING, UPDATE_THING, DELETE_THING } from '../types';

const ThingState = (props) => {
  const initialState = {
    things: [
      {
        id: 1,
        name: '第 1 件事',
        date: '2020-6-18',
        time: [[1592480475000, 1592484075000]],
        labels: ['魑魅', '钩吻'],
      },
      {
        id: 2,
        name: '第 2 件事',
        date: '2020-6-18',
        time: [
          [1592487675000, 1592491275162],
          [1592473275000, 1592476875000],
        ],
        labels: ['山丘', '饕餮'],
      },
      {
        id: 3,
        name: '第 3 件事',
        date: '2020-6-18',
        time: [[1592466075000, 1592469675000]],
        labels: ['南风', '貔貅'],
      },
    ],
    current: null,
  };

  const [state, dispatch] = useReducer(ThingReducer, initialState);

  //方法
  const addThing = (thing) => {
    thing.id = uuidv5();
    dispatch({ type: ADD_THING, payload: thing });
  };

  return (
    <ThingContext.Provider
      value={{
        things: state.things,
        current: state.current,
        addThing,
      }}>
      {props.children}
    </ThingContext.Provider>
  );
};

export default ThingState;
