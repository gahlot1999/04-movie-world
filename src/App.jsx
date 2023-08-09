import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './ui/Home';
import AppLayout from './ui/AppLayout';
import MovieList, { loader as moviesLoader } from './features/movies/MovieList';
import { loader as movieLoader } from './features/movies/Movie';
import Watched from './features/watched/Watchedatched';
import Wishlist from './features/wishlist/Wishlist';
import Movie from './features/movies/Movie';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/movies/:search',
        element: <MovieList />,
        loader: moviesLoader,
      },
      {
        path: '/movies/:search/:page',
        element: <MovieList />,
        loader: moviesLoader,
      },
      {
        path: '/movie/:imdbID',
        element: <Movie />,
        loader: movieLoader,
      },
      {
        path: '/watched',
        element: <Watched />,
      },
      {
        path: '/wishlist',
        element: <Wishlist />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
