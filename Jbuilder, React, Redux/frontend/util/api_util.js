
export const fetchAlPokemon = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/pokemon'
  });
};
