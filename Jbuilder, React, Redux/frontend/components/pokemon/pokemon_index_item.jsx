import React from 'react';
import { Link } from 'react-router-dom';

const PokemonIndexItem = (props) => {
  return (
    <Link to={`/pokemon/${props.pokemon.id}`}>
      <li key={props.pokemon.id}><img src={props.pokemon.image_url}/>{props.pokemon.name}</li>;
    </Link>
  );
};



export default PokemonIndexItem;
