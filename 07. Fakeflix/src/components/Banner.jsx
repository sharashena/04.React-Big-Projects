// react
import { useEffect, useState } from "react";

// redux
import { useSelector, useDispatch } from "react-redux";
import { bannerThunk } from "../redux/features/movies/moviesThunk";
import { openModal } from "../redux/features/movies/moviesSlice";

// base img url
import { baseImgUrl } from "../helpers/imgUrl";

// react icons
import { FaPlay, FaInfoCircle } from "react-icons/fa";
import { Link } from "react-router";

// format text
import { formatText } from "../helpers/formatText";

// assets
import defaultImg from "../assets/defaultImg.png";

const Banner = ({ banner: b }) => {
  const { banner } = useSelector(state => state.moviesSlice);
  const [isVisible, setIsVisible] = useState(false);
  const dispatch = useDispatch();

  const { backdrop_path, poster_path, original_title, title, overview } =
    banner && banner;

  const controller = new AbortController();
  const signal = controller.signal;

  useEffect(() => {
    dispatch(bannerThunk({ b, signal }));
    setIsVisible(true);
    return () => {
      setIsVisible(false);
      controller.abort();
    };
  }, [dispatch]);

  const imgPath = backdrop_path || poster_path;
  const img = baseImgUrl + imgPath;

  return (
    <section
      className={
        isVisible ? "banner-container show-banner" : "banner-container"
      }
      style={{
        background: `url(${(imgPath && img) || defaultImg}) center/cover`,
      }}
    >
      <div className="banner-center section-center">
        <h3 className="banner-title">{original_title || title}</h3>
        <article className="btn-container">
          <Link to="/play" className="btn play-btn loading">
            <FaPlay />
            play
          </Link>
          <button
            className="btn more-btn"
            onClick={() => dispatch(openModal(banner))}
          >
            <FaInfoCircle />
            more info
          </button>
        </article>
        <p>{overview && formatText(overview.length, overview)}</p>
      </div>
      <article className="banner-overlay"></article>
      <article className="bottom-shadow"></article>
    </section>
  );
};

export default Banner;
