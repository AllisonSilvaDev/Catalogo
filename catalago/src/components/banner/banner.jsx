import React, { useEffect, useState } from "react";
import "./banner.css"
import imageBanner from "../../assets/banniere_teaser_cars_4.webp"
import axios from "axios"


export default function Banner() {
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
        <div className="banner">
            <div className="info">
                <div className="logo">
                    <p>Aliçu<span>Flix</span></p>
                </div>
                <div className="movie">
                    <img src="https://lumiere-a.akamaihd.net/v1/images/pp_cars_homepage_logo_v2_67882d33-1_6b3ce336.png?region=0%2C0%2C539%2C348" alt="" />
                </div>
                <div className="quality">
                    <p><span>4k</span> Movie | <span>+3B</span> Streams</p>
                </div>
                <div className="button">
                    <button className="Play">Play</button>
                    <button className="Trailer">Watch Trailer</button>
                </div>
            </div>
            <div className="image">
                <img src={imageBanner} alt="" />
            </div>
        </div>
    )
}