import estilo from './modal.module.css'
import { IoMdClose } from "react-icons/io";
import { FaPlay } from "react-icons/fa";
import { IoPlaySharp } from "react-icons/io5";

export default function Modal({ movie, onClose }) {
  return (
    <div className={estilo.modalback}>
      <div className={estilo.modalConteiner}>
        <div className={estilo.imagem}>
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} className={estilo.imgDetalhas} alt="" />
        </div>

        <div className="">
          <div className={estilo.title}>
            <button onClick={onClose}><IoMdClose /></button>
          </div>
          <div className={estilo.info}>
            <div className={estilo.infoPrinc}>

              <div className={estilo.title.page}>
                <h2>{movie.title}</h2>
                <p>{movie.release_date}</p>
              </div>
              <div className={estilo.description}>
                <p>{movie.overview}</p>
              </div>

              <div className={estilo.buttonPlay}>
                <button> Play </button>
              </div>
            </div>
            <div className={estilo.moreInfos}>
              <p>Popularidade: {movie.popularity} Viewers</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}