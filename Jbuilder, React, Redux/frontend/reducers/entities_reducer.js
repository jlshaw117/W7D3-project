import { combineReducers } from 'redux';
import pokemonReducer from './pokemon_reducer';
import itemsReducer from './items_reducer';
import uiReducer from './ui_reducer';
import { receiveAllPokemon } from '../actions/pokemon_actions';

const entitiesReducer = combineReducers({
  pokemon: pokemonReducer,
  items: itemsReducer,
  ui: uiReducer
});

export default entitiesReducer;
