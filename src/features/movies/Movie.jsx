import { useLoaderData } from 'react-router-dom';
import { fetchMovie } from '../../services/apiMovies';
import PageTitle from '../../ui/PageTitle';
import Capsule from '../../ui/Capsule';

function Movie() {
  const movie = useLoaderData();
  console.log(movie);
  const {
    Poster,
    Plot,
    Title,
    imdbID,
    imdbRating,
    Genre,
    Actors,
    BoxOffice,
    Director,
    Released,
    Runtime,
    Language,
  } = movie;

  const allGenre = Genre?.split(', ');
  const cast = Actors?.split(', ');
  const lang = Language?.split(', ');

  return (
    <div className='flex h-full'>
      <div className='relative overflow-hidden flex-shrink-0'>
        <img src={Poster} alt={Title} className='h-full' />
        <p className='absolute top-2 right-2 bg-warning/90 rounded-full py-1 px-3'>
          ⭐ {imdbRating} / 10
        </p>
      </div>

      <div className='flex flex-col items-center grow overflow-auto px-10'>
        <PageTitle>{Title}</PageTitle>
        <div className='flex gap-4 mt-4'>
          {allGenre.map((el) => (
            <Capsule key={el} el={el} />
          ))}
        </div>

        <div className='py-6 space-y-4 w-full'>
          <p className='flex'>
            <span className='basis-28'>Cast</span>
            <span className='flex gap-4'>
              {cast.map((el) => (
                <Capsule key={el} el={el} />
              ))}
            </span>
          </p>
          <p className='flex'>
            <span className='basis-28'>Box Office</span>
            <Capsule el={BoxOffice} />
          </p>
          <p className='flex'>
            <span className='basis-28'>Director</span> <Capsule el={Director} />
          </p>
          <p className='flex'>
            <span className='basis-28'>Released</span> <Capsule el={Released} />
          </p>
          <p className='flex'>
            <span className='basis-28'>Run Time</span> <Capsule el={Runtime} />
          </p>
          <p className='flex'>
            <span className='basis-28'>Language</span>
            <span className='flex gap-4'>
              {lang.map((el) => (
                <Capsule key={el} el={el} />
              ))}
            </span>
          </p>
          <p className='flex'>
            <span className='basis-28 flex-shrink-0'>Plot</span>
            <span className='rounded-lg bg-highlight/90 text-primary text-sm py-0.5 px-3 uppercase cursor-default'>
              {Plot}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Movie;

/* eslint-disable */
export async function loader({ params }) {
  const movie = fetchMovie(params.imdbID);
  return movie;
}
