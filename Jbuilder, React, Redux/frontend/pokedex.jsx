import React from 'react';
import ReactDOM from 'react-dom';
import * as APIUtil from './util/api_util';
import { RECEIVE_ALL_POKEMON, receiveAllPokemon } from './actions/pokemon_actions';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  const root = document.getElementById('root');
  ReactDOM.render(<h1>Pokedex</h1>, root);

  //testing
  // window.store = store;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.receiveAllPokemon = receiveAllPokemon;
  window.fetchAllPokemon = APIUtil.fetchAlPokemon;
});
