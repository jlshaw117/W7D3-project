import { combineReducer } from 'redux';
import pokemonReducer from './pokemon_reducer';
// import itemsReducer from './item_reducer';

const entitiesReducer = combineReducer({
  pokemon: pokemonReducer,
  // items: itemsReducer
});

export default entitiesReducer;
