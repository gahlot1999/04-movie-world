import { Link, useNavigate, useNavigation } from 'react-router-dom';
import Button from './Button';
import {
  deleteItem as deleteFromWishListAction,
  fetchMovieWithThunk,
  getCurrentMovieStatusByID,
} from '../features/wishlist/wishlistSlice';
import { addItem as addToWatchedAction } from '../features/watched/watchedSlice';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

function MovieItem({ movie, isThisMovieListPage, isThisWishlistPage }) {
  const dispatch = useDispatch();

  const { Poster: poster, Title: title, Year: year, imdbID } = movie;
  const isPresentInWishList = useSelector(getCurrentMovieStatusByID(imdbID));

  function handleAddToWishlist(e) {
    e.preventDefault();
    toast.promise(dispatch(fetchMovieWithThunk(imdbID)), {
      pending: {
        render() {
          return 'Adding to Wishlist';
        },
        position: 'bottom-right',
      },
      success: 'Added to Wishlist 👌',
      error: 'Failed adding movie 🤯',
    });
  }

  function handleAddtoWatched(e) {
    e.preventDefault();
    dispatch(deleteFromWishListAction(imdbID));
    dispatch(addToWatchedAction(movie));
  }

  return (
    <Link
      to={`/movie/${imdbID}`}
      style={{
        backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url(${poster})`,
      }}
      className={`text-center h-48 bg-cover rounded-xl flex flex-col items-center`}
    >
      <div className='flex-grow flex flex-col items-center justify-center space-y-3'>
        <p className='text-xl font-semibold'>{title}</p>
        <p className='text-sm'>{year}</p>{' '}
      </div>
      {(isThisMovieListPage === true || isThisWishlistPage === true) && (
        <Button
          type='card'
          disabled={isPresentInWishList !== 0 && isThisMovieListPage === true}
          onClick={
            isThisMovieListPage === true
              ? handleAddToWishlist
              : handleAddtoWatched
          }
        >
          {isThisMovieListPage === true
            ? isPresentInWishList === 0
              ? 'Add to Wishlist'
              : '✔️ Added to Wishlist'
            : 'Add to Watched'}
        </Button>
      )}
    </Link>
  );
}

export default MovieItem;
