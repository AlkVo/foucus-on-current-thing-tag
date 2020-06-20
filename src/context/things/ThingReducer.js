import { ADD_THING, UPDATE_THING, DELETE_THING } from '../types';

export default (state, action) => {
  switch (action.type) {
    case ADD_THING:
      return {
        ...state,
        things: [...state.things, action.payload],
      };
    default:
      return { state };
  }
};
