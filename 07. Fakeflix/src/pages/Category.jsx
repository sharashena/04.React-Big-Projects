// router
import { useParams, useLocation, Link } from "react-router";

// helper
import { browseRows, tvRows, movieRows } from "../helpers/rows";
import { baseImgUrl } from "../helpers/imgUrl";

// react
import { useEffect, useState, useRef } from "react";

// redux
import { useSelector, useDispatch } from "react-redux";
import { categoryThunk } from "../redux/features/movies/moviesThunk";
import { openModal } from "../redux/features/movies/moviesSlice";

import { FaPlay, FaPlus, FaChevronDown } from "react-icons/fa";

// assets
import defaultImg from "../assets/defaultImg.png";

const Category = () => {
  const { category, genres, isFetching } = useSelector(
    state => state.moviesSlice
  );
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const { title } = useParams();
  const location = useLocation();
  let tempPage;

  if (location.pathname.startsWith("/browse")) {
    tempPage = browseRows;
  } else if (location.pathname.startsWith("/series")) {
    tempPage = tvRows;
  } else if (location.pathname.startsWith("/movies")) {
    tempPage = movieRows;
  }

  const categoryData = tempPage.find(page => page.title === title)?.url;

  const controller = useRef(new AbortController());

  useEffect(() => {
    const handleScroll = () => {
      const height = document.documentElement.scrollTop + window.innerHeight;
      const scrollHeight = document.documentElement.scrollHeight;
      if (height > scrollHeight - 50 && !isFetching) {
        setPage(page + 1);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [dispatch, isFetching]);

  useEffect(() => {
    controller.current.abort();
    controller.current = new AbortController();
    dispatch(
      categoryThunk({
        category: `${categoryData}?page=${page}`,
        signal: controller.current.signal,
        page,
      })
    );
    return () => {
      controller.current.abort();
    };
  }, [page, categoryData, dispatch]);

  return (
    <section className="section category-section">
      <div className="section-center">
        <h3 className="category-title">{title} on fakeflix</h3>
        <div className="category-container">
          {category &&
            category.map((category, index) => {
              const {
                id,
                original_name,
                name,
                original_title,
                title,
                genre_ids,
                backdrop_path,
                poster_path,
              } = category;

              const movieTitle =
                name || original_name || original_title || title;
              const imgPath = backdrop_path || poster_path;
              const imgCheck =
                (imgPath === undefined || imgPath === null) && defaultImg;
              const img = baseImgUrl + imgPath;

              return (
                <article
                  className="category"
                  key={id + index}
                  onClick={() => dispatch(openModal(category))}
                >
                  <img src={(imgPath && img) || imgCheck} alt={movieTitle} />
                  <div className="category-row-info">
                    <article className="category-btn-container">
                      <Link
                        to={"/play"}
                        className="circle-btn row-btn active-circle"
                      >
                        <FaPlay />
                      </Link>
                      <button className="circle-btn row-btn">
                        <FaPlus />
                      </button>
                      <button
                        className="circle-btn row-btn"
                        onClick={() => dispatch(openModal(category))}
                      >
                        <FaChevronDown />
                      </button>
                    </article>
                    <h5 className="category-row-movie-title">{movieTitle}</h5>
                    <p className="category-row-genres-container">
                      {genre_ids &&
                        genre_ids
                          .map((genreId, index) => {
                            const genre = genres.find(
                              g => g.id === genreId
                            )?.name;
                            return (
                              <span key={index} className="category-row-genres">
                                {genre}
                              </span>
                            );
                          })
                          .slice(0, 2)}
                    </p>
                  </div>
                </article>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default Category;
