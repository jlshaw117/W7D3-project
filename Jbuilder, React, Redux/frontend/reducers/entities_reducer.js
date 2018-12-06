import { combineReducer } from 'redux';
import pokemonReducer from './pokemon_reducer';

const entitiesReducer = combineReducer({
  pokemon: pokemonReducer
});

export default entitiesReducer;
