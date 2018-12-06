import React from 'react';
import requestAllPokemon from '../../actions/pokemon_actions';


export default class PokemonIndex extends React.Component {
  componentDidMount() {
    this.props.requestAllPokemon();
  }

  render() {
    let result = this.props.pokemon.map((el) => (
      <li key={el.id}><img src={el.image_url}/>{el.name}</li>
    ));

    return (<ul>
      {result}
    </ul>);
  }
}
