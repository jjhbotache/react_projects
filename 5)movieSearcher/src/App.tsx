import { createRef } from 'react';
import styles from './App.module.css';
import Movies from './components/Movies';
import { useMovies } from './hooks/useMovies';


// const apiKey = 'db0bd21f';




function App() {
  const { movies, searchMovies } = useMovies();
  const inputRef = createRef<HTMLInputElement>();

  function handleSubmit(event:React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // console.log(event);
    const formEl = event.target as HTMLFormElement;
    const data = Object.fromEntries(
      new FormData(formEl)
    )
    searchMovies(data.movie as string)
  }

  
  return (
    <div className={styles.app}>
      <h1>Technique test</h1>
      <hr />
      <header>
        <h2>Search a movie</h2>
        <hr />
        <form action="" onSubmit={handleSubmit} className='mb-5'>
            <div className="d-flex b btn-group">
              <input ref={inputRef} type="text" name='movie' className="btn form-control border-bottom " placeholder="Put your movie here"/>
              <button type="submit" className="btn btn-primary">Search</button>
            </div>
        </form>
      </header>
      <main>
          <ul className={styles.movieContainer}>
            <Movies movies={ movies }/>
          </ul>
      </main>
    </div>
  )
}

export default App
