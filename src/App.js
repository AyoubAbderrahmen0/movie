import './App.css';
import MovieList from './Components/MovieList';
import Navb from './Components/Navb';
import moviesData from './Data'
import { useEffect, useState } from 'react';

function App() {
  const [movies,setMovies]=useState(moviesData)
  const [search, setSearch]=useState("")
  console.log(search)
  useEffect(()=>{
    if(search){
      setMovies(moviesData.filter(movie =>movie.title.toLowerCase().includes(search.toLowerCase().trim())))
    }else{
      setMovies(moviesData)
    }
  },[search])

  return (
    <div>
      <div className="App">
      <Navb setSearch={setSearch} />
      <MovieList movies={movies} setMovies={setMovies}/>
    </div>
    </div>
  );
}

export default App;
