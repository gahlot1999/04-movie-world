const APIKEY = '?apikey=c9b43ca4';
const BASE_URL = 'http://www.omdbapi.com/';

//Search movie with search query
export async function fetchMovies(query, page = 1) {
  const res = await fetch(`${BASE_URL}${APIKEY}&s=${query}&page=${page}`);

  if (!res.ok) throw Error('Failed getting movies');

  const data = await res.json();
  return data;
}

//Get movie with imdbID
export async function fetchMovie(imdbID) {
  const res = await fetch(`${BASE_URL}${APIKEY}&i=${imdbID}&plot=full`);

  if (!res.ok) throw Error('Failed getting movie');

  const data = await res.json();
  return data;
}
