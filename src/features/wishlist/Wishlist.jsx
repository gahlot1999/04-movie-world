import { useSelector } from 'react-redux';
import { getWishList } from './wishlistSlice';
import MovieItem from '../../ui/MovieItem';
import PageTitle from '../../ui/PageTitle';

function Wishlist() {
  const wishlist = useSelector(getWishList);
  return (
    <>
      <PageTitle>Wishlist</PageTitle>
      <div className='grid sm:grid-cols-3 md:grid-cols-5 grid-cols-1 gap-14 my-6 mx-8'>
        {wishlist.map((movie) => (
          <MovieItem
            movie={movie}
            key={movie.imdbID}
            isThisWishlistPage={true}
          />
        ))}
      </div>
    </>
  );
}

export default Wishlist;
