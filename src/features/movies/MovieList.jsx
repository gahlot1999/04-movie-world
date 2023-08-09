import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import { fetchMovies } from '../../services/apiMovies';
import MovieItem from '../../ui/MovieItem';
import ReactPaginate from 'react-paginate';
import { useState } from 'react';
import { useEffect } from 'react';

function Movies() {
  const { Search, totalResults } = useLoaderData();
  const [movies, setMovies] = useState([]);
  const { search } = useParams();
  const navigate = useNavigate();

  useEffect(
    function () {
      setMovies(Search);
    },
    [Search],
  );

  function handlePageChange(data) {
    const page = data.selected + 1;
    navigate(`/movies/${search}/${page}`);
  }

  return (
    <>
      <div className='grid sm:grid-cols-3 md:grid-cols-5 grid-cols-1 gap-14 my-8 mx-8'>
        {movies.map((movie) => (
          <MovieItem
            movie={movie}
            key={movie.imdbID}
            isThisMovieListPage={true}
          />
        ))}
      </div>
      <div className='flex items-center justify-center mb-4 text-sm'>
        <ReactPaginate
          previousLabel={'<'}
          nextLabel={'>'}
          breakLabel={'...'}
          pageCount={Math.ceil(Number(totalResults) / 10)}
          marginPagesDisplayed={2}
          pageRangeDisplayed={3}
          onPageChange={handlePageChange}
          containerClassName={'paginationContainer'}
          activeClassName={'active'}
          breakClassName={'break'}
        />
      </div>
    </>
  );
}

export default Movies;

/* eslint-disable */
export async function loader({ params }) {
  const movies = await fetchMovies(params.search, params.page);
  return movies;
}
