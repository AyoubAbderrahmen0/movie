import './App.css';
import MovieList from './Components/MovieList';
import Navb from './Components/Navb';
import moviesData from './Data'
import { useEffect, useState } from 'react';

function App() {
  const [movies,setMovies]=useState(moviesData)
  const [search, setSearch]=useState("")
  const [rating, setRating] = useState(0);
  useEffect(()=>{
    if(search){
      setMovies(moviesData.filter(movie =>movie.title.toLowerCase().includes(search.toLowerCase().trim())))
    }if (rating){
      setMovies(moviesData.filter(movie =>movie.rate==rating))
    }
    else{
      setMovies(moviesData)
    }
  },[search,rating])

  return (
    <div>
      <div className="App">
      <Navb setSearch={setSearch} setRating={setRating} rating={rating}/>
      <MovieList movies={movies} setMovies={setMovies}/>
    </div>
    </div>
  );
}

export default App;
