export function selectAllPokemon (state) {
  // debugger
  return Object.values(state.entities.pokemon);
}
export function selectSinglePokemon (id) {
  return state.entities.pokemon[id];
}
