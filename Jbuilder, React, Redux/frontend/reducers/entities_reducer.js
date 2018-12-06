import { combineReducers } from 'redux';
import pokemonReducer from './pokemon_reducer';
// import itemsReducer from './item_reducer';
import { receiveAllPokemon } from '../actions/pokemon_actions';

const entitiesReducer = combineReducers({
  pokemon: pokemonReducer,
  // items: itemsReducer
});

export default entitiesReducer;
