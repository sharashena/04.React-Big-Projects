// react
import { useEffect } from "react";
import { BsPlay } from "react-icons/bs";

// helper
import { credits } from "../../helpers/credits";

// router
import { Link } from "react-router-dom";

// redux
import { useSelector, useDispatch } from "react-redux";
import {
  rowsThunk,
  genresThunk,
  creditsThunk,
} from "../../redux/home/productsThunk";
import { changeLanguages, openModal } from "../../redux/home/productsSlice";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import swiper required modules
import { Navigation } from "swiper/modules";

// img url
const img_url = "https://image.tmdb.org/t/p/original";

const Row = ({ title, path, request, currElRef, setShowModal, showModal }) => {
  const { rowProducts, size } = useSelector(state => state.products);
  const dispatch = useDispatch();

  // change language
  // change language
  // change language

  const handleChangeLanguage = e => {
    const language = e.target.textContent;
    dispatch(changeLanguages(language));
  };

  // open modal
  // open modal
  // open modal

  const handleOpenModal = (e, id, firstAirDate) => {
    setShowModal(true);
    if (e.target.classList.contains("row-overlay")) {
      const element = e.target.getBoundingClientRect();
      const modalWidth = currElRef.current.offsetWidth;
      const parentTop =
        e.target?.offsetParent?.offsetParent?.offsetParent?.offsetTop;
      const posterWidth =
        e.target.offsetParent.offsetParent.offsetParent.getBoundingClientRect()
          .width;
      currElRef.current.style.left = `${element.right + 5}px`;
      currElRef.current.style.top = `${parentTop + 43}px`;
      currElRef.current.style.height = `${element.height}px`;
      if (element.left + modalWidth > posterWidth) {
        currElRef.current.style.left = `${element.left - modalWidth - 5}px`;
      }
    }
    const product = rowProducts[title]?.find(product => product.id === id);
    dispatch(openModal(product));
    dispatch(creditsThunk(credits(id, firstAirDate)));
    dispatch(genresThunk(firstAirDate));
  };

  // close modal
  // close modal
  // close modal
  const handleCloseModal = e => {
    setShowModal(false);
  };

  // fetch rows dynamically
  useEffect(() => {
    dispatch(rowsThunk({ request, title }));
  }, [request, title]);

  return (
    <article className="poster">
      <Link to={path && path} className="row-title">
        {title}
      </Link>
      <Swiper
        slidesPerView={
          size <= 640 ? 3 : size <= 1024 ? 4 : size <= 1535 ? 6 : 6
        }
        slidesPerGroup={
          size >= 640 ? 4 : size >= 1024 ? 6 : size >= 1535 ? 7 : 3
        }
        spaceBetween={10}
        modules={[Navigation]}
        navigation={true}
        className="row-swiper"
      >
        <div>
          {rowProducts[title]?.map(product => {
            const {
              id,
              poster_path,
              backdrop_path,
              original_name,
              original_title,
              title,
              first_air_date,
            } = product;
            const name = original_name || original_title || title || name;
            const img = poster_path || backdrop_path;
            return (
              <SwiperSlide
                key={id}
                className="row"
                onMouseOver={e => handleOpenModal(e, id, first_air_date)}
                onMouseOut={handleCloseModal}
              >
                <Link to={`${first_air_date ? "tv" : "movie"}/${id}`}>
                  <img
                    src={`${img_url}${img}`}
                    alt={name}
                    className="row-img"
                  />
                </Link>
                {size >= 1024 && (
                  <Link
                    to={`${first_air_date ? "tv" : "movie"}/${id}`}
                    className="row-overlay"
                  >
                    <button type="button" className="btn row-play-btn">
                      <BsPlay />
                    </button>
                    <div className="row-languages">
                      {["GEO", "ENG", "RUS"].map((language, index) => {
                        return (
                          <button
                            type="button"
                            className="btn language-btn"
                            key={index}
                            onClick={handleChangeLanguage}
                          >
                            {language}
                          </button>
                        );
                      })}
                    </div>
                  </Link>
                )}
              </SwiperSlide>
            );
          })}
        </div>
      </Swiper>
    </article>
  );
};

export default Row;
