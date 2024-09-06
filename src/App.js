import './App.css';
import MovieList from './Components/MovieList';
import Navb from './Components/Navb';
import moviesData from './Data'
import { useState } from 'react';

function App() {
  const [movies,setMovies]=useState(moviesData)
  return (
    <div>
      <div className="App">
      <Navb />
      <MovieList movies={movies} setMovies={setMovies}/>
    </div>
    </div>
  );
}

export default App;
