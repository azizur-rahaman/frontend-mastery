import logo from './logo.svg';
import './App.css';
import { SearchBar } from './components/SearchBar';
import { MovieList } from './components/MovieList';
import { useState } from 'react';

function App() {
    const [movies, setMovies] = useState([]);
    const API_KEY = process.env.REACT_APP_OMDB_API_KEY || '4baadb78';
    
    async function fetchMovieList(query) {
        try {
            const res = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`);
            const data = await res.json();
            setMovies(data.Search || [])
            console.log(movies);
        } catch (error) {
            console.error('Error fetching movies:', error);
        }
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
