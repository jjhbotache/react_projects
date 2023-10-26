import Movie from "../interfaces/movieInterface"
interface Props{
  movies: Movie[]
}

function RenderMovies({movies}:Props) {
  return(
    movies.map((movie:Movie) => (
      <li key={movie.id}>
        <h3>{movie.title}</h3>
        <h5>{movie.year}</h5>
        <img src={movie.poster} alt={movie.title} />
      </li>
    ))
  )
}
function RenderNoMovies() {
  return(
    <h3>There are no movies</h3>
  )
}

export default function Movies({movies}:Props) {
  const thereAreMovies:boolean = movies.length>0;
  return(
    thereAreMovies 
            ?<RenderMovies movies={movies}/>  
            :<RenderNoMovies/>
  )
}



