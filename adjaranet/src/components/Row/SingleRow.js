import { useEffect } from "react";

// react icons
import { BsPlay } from "react-icons/bs";

// swiper
import { Swiper, SwiperSlide } from "swiper/react";
// swiper styles
import "swiper/css";
import "swiper/css/navigation";
// required modules
import { Navigation } from "swiper";

// redux
import { useSelector, useDispatch } from "react-redux";
import { moviesThunk } from "../../redux/features/allMovies/moviesThunk";

const base_url = "https://image.tmdb.org/t/p/original";

const SingleRow = ({ title, request }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(moviesThunk(request));
  }, []);

  const { movies } = useSelector(({ movies }) => movies);
  return (
    <article className="row">
      <h4 className="row-title">{title}</h4>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        slidesPerView={4}
        spaceBetween={2}
      >
        {movies.map(movie => {
          const {
            id,
            backdrop_path,
            poster_path,
            name,
            title,
            original_title,
          } = movie;
          const names = original_title || name || title;
          return (
            <SwiperSlide key={id}>
              <div className="row-img-container">
                <img
                  src={`${base_url}${backdrop_path || poster_path}`}
                  alt={names}
                  className="row-img"
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </article>
  );
};

export default SingleRow;
