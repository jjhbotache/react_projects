
import { apiRoute } from "../const/const";
// import movieResults  from "../mocks/with-results.json";
import { useState } from "react";
import {MovieFromData} from "../interfaces/movieInterface";


export function useMovies() {
  const [movies, setMovies] = useState([]);

  function searchMovies(input:string) {
    apiRoute.searchParams.set('s', input)
    fetch(apiRoute).then(re=>re.json())
    .then((data) => {
      setMovies(
        data.Search.map((movie:MovieFromData) => {
        return {
          title: movie.Title,
          year: movie.Year,
          poster: movie.Poster,
          id: movie.imdbID
        }
      }))
    }
    )
  }
  return {
    movies,
    searchMovies
  };
}