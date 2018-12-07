import { connect } from 'react-redux';
import { selectSinglePokemon } from '../../reducers/selectors';
import { requestSinglePokemon } from '../../actions/pokemon_actions';
import PokemonDetail from './pokemon_detail';


const mapStateToProps = (state, ownprops) => ({
  pokemon: state.entities.pokemon[ownprops.match.params.pokemonId]
});

const mapDispatchToProps = dispatch => ({
  requestSinglePokemon: (id) => dispatch(requestSinglePokemon(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetail);
