import logo from './logo.svg';
import './App.css';
import { SearchBar } from './components/SearchBar';
import { MovieList } from './components/MovieList';
import { useState } from 'react';

function App() {
    const [movies, setMovies] = useState([]);
    async function fetchMovieList(query) {
        const res = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=4baadb78&s=${query}`);
        const data = await res.json();
        setMovies(data.Search || [])
        console.log(movies);
    }

  return (
    <div>
      <SearchBar search={fetchMovieList}/>
      <br/>
      <MovieList movies={movies}/>
    </div>
  );
}

export default App;
