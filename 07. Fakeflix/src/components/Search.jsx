// redux
import { queryThunk } from "../redux/features/movies/moviesThunk";
import {
  openModal,
  addToList,
  clearSearch,
} from "../redux/features/movies/moviesSlice";
import { useSelector, useDispatch } from "react-redux";

// react
import { useEffect, useRef } from "react";

// helper
import { baseImgUrl } from "../helpers/imgUrl";

// router
import { Link } from "react-router";

// react icons
import { FaPlay, FaPlus, FaChevronDown } from "react-icons/fa";

// assets
import defaultImg from "../assets/defaultImg.png";

const Search = () => {
  const { query, queryData, genres, list } = useSelector(
    state => state.moviesSlice
  );
  const controller = useRef(new AbortController());
  const dispatch = useDispatch();

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

  useEffect(() => {
    const timer = setTimeout(() => {
      controller.current.abort();
      controller.current = new AbortController();

      if (query) {
        dispatch(
          queryThunk({
            query: `search/multi?query=${query}`,
            signal: controller.current.signal,
          })
        );
      }
    }, 300);

    return () => {
      controller.current.abort();
      clearTimeout(timer);
    };
  }, [query, dispatch]);

  return (
    <div className={query ? "query-overlay show-query" : "query-overlay"}>
      <section className="section search-section">
        <div className="section-center">
          <h3 className="search-section-title">search results for: {query}</h3>
          <div className="query-container">
            {queryData &&
              queryData.map(data => {
                const {
                  id,
                  original_name,
                  name,
                  original_title,
                  title,
                  genre_ids,
                  backdrop_path,
                  poster_path,
                } = data;

                const movieTitle =
                  name || original_name || original_title || title;
                const imgPath = backdrop_path || poster_path;
                const imgCheck =
                  (imgPath === undefined || imgPath === null) && defaultImg;
                const img = baseImgUrl + imgPath;
                return (
                  <article
                    className="search-row"
                    key={id}
                    onClick={() => dispatch(openModal(data))}
                  >
                    <img src={(imgPath && img) || imgCheck} alt={movieTitle} />
                    <div className="search-row-info">
                      <article className="search-btn-container">
                        <Link
                          to={"/play"}
                          className="circle-btn row-btn active-circle"
                          onClick={e => {
                            e.stopPropagation();
                            dispatch(clearSearch());
                          }}
                        >
                          <FaPlay />
                        </Link>
                        <button
                          className="circle-btn row-btn"
                          onClick={e => {
                            e.stopPropagation();
                            addDataToList(data);
                          }}
                        >
                          <FaPlus />
                        </button>
                        <button
                          className="circle-btn row-btn"
                          onClick={() => dispatch(openModal(data))}
                        >
                          <FaChevronDown />
                        </button>
                      </article>
                      <h5 className="search-row-movie-title">{movieTitle}</h5>
                      <p className="search-row-genres-container">
                        {genre_ids &&
                          genre_ids
                            .map((genreId, index) => {
                              const genre = genres.find(
                                g => g.id === genreId
                              )?.name;
                              return (
                                <span key={index} className="search-row-genres">
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
    </div>
  );
};

export default Search;
