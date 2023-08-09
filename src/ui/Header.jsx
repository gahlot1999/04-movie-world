import { Link } from 'react-router-dom';
import Button from './Button';
import SearchMovie from '../features/movies/SearchMovie';

function Header() {
  return (
    <div className='flex items-center justify-between bg-secondary text-text-color-1 px-6 py-4'>
      <Link
        to='/'
        className='text-[2rem] font-bold tracking-widest hover:outline hover:outline-[4px] hover:outline-offset-4 transition-[outline]'
      >
        MovieWorld
      </Link>
      <SearchMovie />
      <Button type='login'>Login</Button>
    </div>
  );
}

export default Header;
