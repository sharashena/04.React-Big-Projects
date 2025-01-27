// react icons
import { FaTimes, FaPlay, FaPlus } from "react-icons/fa";

// redux
import {
  closeModal,
  addToList,
  clearSearch,
} from "../redux/features/movies/moviesSlice";
import { useSelector, useDispatch } from "react-redux";

// helper
import { baseImgUrl } from "../helpers/imgUrl";

// assets
import defaultImg from "../assets/defaultImg.png";

// router
import { Link } from "react-router";

// react
import { useRef, useEffect } from "react";

const Modal = ({ modal }) => {
  const { isModal, genres, list } = useSelector(state => state.moviesSlice);
  const dispatch = useDispatch();
  const modalRef = useRef(null);

  const {
    name,
    title,
    original_name,
    original_title,
    overview,
    backdrop_path,
    poster_path,
    first_air_date,
    release_date,
    genre_ids,
    original_language,
    vote_average,
    adult,
  } = modal;

  const releaseDate = first_air_date || release_date;
  const movieTitle = title || name || original_name || original_title;
  const imgPath = backdrop_path || poster_path;
  const img = baseImgUrl + imgPath;

  const addDataToList = movie => {
    let temp = list.find(data => data.id === movie.id);

    if (temp) {
      temp = list.map(data => {
        if (data.id === movie.id) {
          return data;
        }
        return data;
      });
      dispatch(addToList(temp));
    } else {
      dispatch(addToList([...list, movie]));
    }
  };

  const handleCloseModal = e => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      dispatch(closeModal());
    }
  };

  useEffect(() => {
    window.addEventListener("mousedown", handleCloseModal);
    return () => window.removeEventListener("mousedown", handleCloseModal);
  }, []);

  return (
    <div className={isModal ? "modal-overlay show-modal" : "modal-overlay"}>
      <div className="modal-container" ref={modalRef}>
        <article className="modal-img-container">
          <img src={imgPath && img || defaultImg} alt={movieTitle} />
          <div className="modal-btn-container">
            <Link
              to={"/play"}
              className="btn play-btn"
              onClick={() => {
                dispatch(closeModal());
                dispatch(clearSearch());
              }}
            >
              <FaPlay />
              play
            </Link>
            <button className="circle-btn" onClick={() => addDataToList(modal)}>
              <FaPlus />
            </button>
          </div>
          <button className="close-btn" onClick={() => dispatch(closeModal())}>
            <FaTimes />
          </button>
          <div className="bottom-shadow modal-shadow"></div>
        </article>

        <article className="modal-info-container">
          <div className="modal-desc-container">
            <h3 className="modal-movie-title">{movieTitle}</h3>
            <p className="movie-desc">{overview}</p>
          </div>

          <hr className="modal-line" />

          <div className="modal-movie-info">
            <h3 className="modal-movie-title">
              info on <b>{movieTitle}</b>
            </h3>
            <p>
              genres:{" "}
              {genre_ids &&
                genre_ids.map((genreId, index) => {
                  const genre = genres.find(
                    genre => genre.id === genreId
                  )?.name;
                  return (
                    <span className="genres" key={index}>
                      {genre || "not available"}
                    </span>
                  );
                })}
            </p>
            <p>
              {release_date ? "release date" : "first aire date"}:{" "}
              <span>{releaseDate && new Date(releaseDate).getFullYear()}</span>
            </p>
            <p>
              average vote:{" "}
              <span>{vote_average && vote_average.toFixed(1)}</span>
            </p>
            <p>
              original language: <span>{original_language}</span>
            </p>
            <p>
              age classification:{" "}
              <span>{adult ? "suitable for all ages" : "+18"}</span>
            </p>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Modal;
