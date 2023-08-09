import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SearchMovie() {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const searchBar = useRef();

  useEffect(function () {
    searchBar.current.focus();
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    navigate(`/movies/${query}`);
    setQuery('');
    searchBar.current.blur();
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        className='w-[25rem] px-3 py-1.5 rounded-md outline-offset-4 outline-none'
        placeholder='Enter movie name'
        ref={searchBar}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  );
}

export default SearchMovie;
