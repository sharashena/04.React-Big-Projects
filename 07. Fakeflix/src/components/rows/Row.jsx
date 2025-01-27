// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

// swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// router
import { Link } from "react-router";

// react
import { useEffect, useRef, useState } from "react";

// redux
import { moviesThunk } from "../../redux/features/movies/moviesThunk";
import { useDispatch, useSelector } from "react-redux";
import { openModal, addToList } from "../../redux/features/movies/moviesSlice";

// helper
import { baseImgUrl } from "../../helpers/imgUrl";

// assets
import defaultImg from "../../assets/defaultImg.png";

// icons
import {
  FaChevronRight,
  FaChevronLeft,
  FaPlay,
  FaPlus,
  FaChevronDown,
} from "react-icons/fa";

const Row = ({ title, url, bigRow }) => {
  const [size, setSize] = useState(window.innerWidth);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const { movies, genres, isLoading, list } = useSelector(
    state => state.moviesSlice
  );
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  const paginationRef = useRef(null);
  const dispatch = useDispatch();

  const insertPositionClassname = index => {
    const i = index + 1;

    if (i === 1) return "right";
    if (i === 20) return "left";

    if (size >= 1378) {
      if ([5, 10, 15].includes(i)) return "left";
      else if ([6, 11, 16].includes(i)) return "right";
      return "";
    } else if (size >= 992) {
      if ([4, 8, 12, 16].includes(i)) return "left";
      else if ([5, 9, 13, 17].includes(i)) return "right";
      return "";
    } else if (size >= 768) {
      if ([3, 6, 9, 12, 15, 18].includes(i)) return "left";
      else if ([4, 7, 10, 13, 16, 19].includes(i)) return "right";
      return "";
    }
  };

  const getClassName = index => {
    if (hoveredIndex === index) return "center";
    if (hoveredIndex > index) return "prev-slide";
    if (hoveredIndex < index) return "next-slide";
    return "";
  };

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

  const controller = new AbortController();
  const signal = controller.signal;

  useEffect(() => {
    dispatch(moviesThunk({ title, url, signal }));
    window.addEventListener("resize", setSize(window.innerWidth));
    return () => {
      window.removeEventListener("resize", setSize(window.innerWidth));
      controller.abort();
    };
  }, [dispatch]);

  return (
    <div
      className={
        isLoading ? "row-container" : "row-container show-row-container"
      }
    >
      <Link to={title} className="row-title">
        {title}
        <span>
          show all <FaChevronRight />
        </span>
      </Link>
      <div className="swiper-container">
        <Swiper
          observer={true}
          observeParents={true}
          navigation={{
            nextEl: navigationNextRef.current,
            prevEl: navigationPrevRef.current,
          }}
          pagination={{
            el: paginationRef.current,
            clickable: true,
          }}
          modules={[Pagination, Navigation]}
          slidesPerView={
            size >= 1378 ? 5 : size >= 992 ? 4 : size >= 625 ? 3 : 2
          }
          slidesPerGroup={
            size >= 1378 ? 5 : size >= 992 ? 4 : size >= 625 ? 3 : 2
          }
          spaceBetween={10}
        >
          {movies[title] &&
            movies[title].map((movie, index) => {
              const {
                id,
                original_name,
                name,
                original_title,
                title,
                genre_ids,
                backdrop_path,
                poster_path,
              } = movie;

              const movieTitle =
                name || original_name || original_title || title;
              const imgPath = backdrop_path || poster_path;
              const imgCheck =
                (imgPath === undefined || imgPath === null) && defaultImg;
              const img = baseImgUrl + imgPath;

              return (
                <SwiperSlide
                  key={index}
                  className={`${insertPositionClassname(index)} ${getClassName(
                    index
                  )}`}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  onClick={() => dispatch(openModal(movie))}
                >
                  <article
                    className="single-row"
                    style={{
                      height: bigRow ? "400px" : "auto",
                    }}
                  >
                    <img src={(imgPath && img) || imgCheck} alt={movieTitle} />
                    <div className="single-row-info">
                      <article className="single-row-btn-container">
                        <Link
                          to={"/play"}
                          className="circle-btn row-btn active-circle"
                          onClick={e => e.stopPropagation()}
                        >
                          <FaPlay />
                        </Link>
                        <button
                          className="circle-btn row-btn"
                          onClick={e => {
                            e.stopPropagation();
                            addDataToList(movie);
                          }}
                        >
                          <FaPlus />
                        </button>
                        <button
                          className="circle-btn row-btn"
                          onClick={() => dispatch(openModal(movie))}
                        >
                          <FaChevronDown />
                        </button>
                      </article>
                      <h5 className="single-row-movie-title">{movieTitle}</h5>
                      <p className="single-row-genres-container">
                        {genre_ids &&
                          genre_ids
                            .map((genreId, index) => {
                              const genre = genres.find(
                                g => g.id === genreId
                              )?.name;
                              return (
                                <span key={index} className="single-row-genres">
                                  {genre}
                                </span>
                              );
                            })
                            .slice(0, 2)}
                      </p>
                    </div>
                  </article>
                </SwiperSlide>
              );
            })}
        </Swiper>
        {/* cutom navigation buttons */}
        <div ref={navigationPrevRef} className="row-btn-prev">
          <FaChevronLeft />
        </div>
        <div ref={navigationNextRef} className="row-btn-next">
          <FaChevronRight />
        </div>

        {/* custom pagination button */}
        <div ref={paginationRef} className="pagination-bullets"></div>
      </div>
    </div>
  );
};

export default Row;
