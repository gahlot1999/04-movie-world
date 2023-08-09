import { useSelector } from 'react-redux';
import PageTitle from '../../ui/PageTitle';
import { getWatchedList } from './watchedSlice';
import MovieItem from '../../ui/MovieItem';

function Watched() {
  const watched = useSelector(getWatchedList);
  return (
    <>
      <PageTitle>Watched</PageTitle>
      <div className='grid sm:grid-cols-3 md:grid-cols-5 grid-cols-1 gap-14 my-6 mx-8'>
        {watched.map((movie) => (
          <MovieItem movie={movie} key={movie.imdbID} />
        ))}
      </div>
    </>
  );
}

export default Watched;
