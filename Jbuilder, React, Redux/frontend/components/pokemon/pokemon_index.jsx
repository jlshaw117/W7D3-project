import React from 'react';
import requestAllPokemon from '../../actions/pokemon_actions';
import PokemonIndexItem from './pokemon_index_item';
import PokemonDetailContainer from './pokemon_detail_container';
import { HashRouter, Route } from 'react-router-dom';

export default class PokemonIndex extends React.Component {
  componentDidMount() {
    this.props.requestAllPokemon();
  }

  render() {
    let result = this.props.pokemon.map((el) => <PokemonIndexItem key={el.id} pokemon={el} />);
    return (
      <div>
          <Route path="/pokemon/:pokemonId" component={PokemonDetailContainer} />
        <ul>
          {result}
        </ul>
      </div>
    );
  }
}
