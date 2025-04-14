import React from "react";
import "./lista.css"


export function Card(movie) {
    return (
        <div className="containerCatalago">
            <div className="moviesCard">
                <div className="movie">
                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}  alt="Poster" />
                </div>
            </div>
        </div>
    )
}