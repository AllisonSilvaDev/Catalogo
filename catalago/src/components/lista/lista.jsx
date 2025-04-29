import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Card } from "../card/card";

export function Lista(inicio, final) {
    const [movies, setMovies] = useState([''])
    const [SelectedMovie, SetSelectedMovie] = useState(null)


    const handleOpenModal = (movie) => {
        SetSelectedMovie(movie);
    };
    const handleCloseModal = () => {
        SetSelectedMovie(null)
    };

    const API_KEY = 'af26cce282aecf5c6cc39a264f29d0a7'
    const API_URL = 'https://api.themoviedb.org/3'

    useEffect(() => {
        const response = () => {
            // axios.get(`${API_URL}/search/movie?api_key=${API_KEY}&query=shrek&language=pt-BR`)
            axios.get(`${API_URL}/movie/now_playing?api_key=${API_KEY}&language=pt-BR&region=BR`)
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
        <div className="container-lista">
            <p>Assistir Novamente</p>
            <div className="movies">
                {movies.slice().map((movie) => (
                    <Card
                        key={movie.id}
                        title={movie.title}
                        poster_path={movie.poster_path}
                        onOpenModal={handleOpenModal}
                        movie={movie}
                    />
                ))}
            </div>
        </div>
    )
}