import React from 'react';

class PokemonDetail extends React.Component {
    componentDidUpdate(prevProps){

    }

    componentDidMount() {
      this.props.requestSinglePokemon(this.props.match.params.pokemonId);
    }
    render() {
      return (<h1>PokemonDetail</h1>)
    }
}

export default PokemonDetail;
