import React from 'react';
import requestAllPokemon from '../../actions/pokemon_actions';
import PokemonIndexItem from './pokemon_index_item';

export default class PokemonIndex extends React.Component {
  componentDidMount() {
    this.props.requestAllPokemon();
  }

  render() {
    let result = this.props.pokemon.map((el) => <PokemonIndexItem key={el.id} pokemon={el} />);
    return (<ul>
      {result}
    </ul>);
  }
}
