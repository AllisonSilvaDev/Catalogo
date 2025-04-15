import estilo from './modal.module.css'

export default function Modal({ movie, onClose }) {
  return (
    <div className={estilo.modalback}>
        <div className={estilo.modalConteiner}>
            <h2>{movie.title}</h2>
            <button onClick={onClose}>X</button>

            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}  className={estilo.imgDetalhas} alt="" />
            <p>{movie.popularity}</p>
            <p>{movie.realise_data}</p>
            <p>{movie.vote_count}</p>
            <p>{movie.overview}</p>
        </div>
    </div>
  );
}