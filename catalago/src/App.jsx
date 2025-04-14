import { useEffect, useState } from 'react'
import './App.css'
import Banner from './components/banner/banner'
import Header from './components/cabecalho/Header'
import axios from "axios"
import { Card } from './components/card/card'

function App() {

  const [movies, setMovies] = useState([''])
  const API_KEY = 'af26cce282aecf5c6cc39a264f29d0a7'
  const API_URL = 'https://api.themoviedb.org/3'

  useEffect(() => {
    const response = () => {
      axios.get(`${API_URL}/movie/popular?api_key=${API_KEY}&language=pt-BR`)
        .then((response) => {
          console.log(response.data.results)
          setMovies(response.data.results)
        })
        .catch((error) => {
          console.log(error)
        })
    }
    response()
  }, [])

  return (
    <div className='container-geral'>
      <Header />
      <Banner />
      <div className="container-lista">
      <p>Assistir Novamente</p>
        <div className="movies">
          {movies.slice(0, 7).map((movie) => (
            <Card
              key={movie.id}
              title={movie.title}
              poster_path={movie.poster_path}
            />
          ))}
        </div>
      </div>
      <div className="container-lista">
        <p>Series</p>
        <div className="movies">
          {movies.slice(7, 14).map((movie) => (
            <Card
              key={movie.id}
              title={movie.title}
              poster_path={movie.poster_path}
            />
          ))}
        </div>
      </div>
      <div className="container-lista">
      <p>Filmes</p>
        <div className="movies">
          {movies.slice(13, 21).map((movie) => (
            <Card
              key={movie.id}
              title={movie.title}
              poster_path={movie.poster_path}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
