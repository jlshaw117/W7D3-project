import { merge } from 'lodash';

const itemsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    // case RECEIVE_ALL_POKEMON:
    //   return merge({}, state, action.pokemon);
    // case RECEIVE_SINGLE_POKEMON:
    //   return merge({}, state, action.pokemon);
    default:
    return state;

  }
};

export default itemsReducer;
