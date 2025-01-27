// react icons
import { FaPlay, FaMinus, FaChevronDown } from "react-icons/fa";

// react
import { useEffect } from "react";

// router
import { Link } from "react-router";

// redux
import { useSelector, useDispatch } from "react-redux";
import { openModal, removeItem } from "../redux/features/movies/moviesSlice";

// helper
import { baseImgUrl } from "../helpers/imgUrl";

const List = () => {
  const { list, genres } = useSelector(state => state.moviesSlice);
  const dispatch = useDispatch();

  const deleteItem = id => {
    const tempArr = list.filter(item => item.id !== id);
    dispatch(removeItem(tempArr));
    localStorage.setItem("list", JSON.stringify(tempArr));
  };

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, []);

  return (
    <section className="section list-section">
      <div className="section-center">
        {list.length < 1 ? (
          <h3>Sorry, you don't have a favourite movie or tv-show yet.</h3>
        ) : (
          <div className="list-container">
            {list.map(item => {
              const {
                id,
                original_name,
                name,
                original_title,
                title,
                genre_ids,
                backdrop_path,
                poster_path,
              } = item;

              const movieTitle =
                name || original_name || original_title || title;
              const imgPath = backdrop_path || poster_path;
              const img = baseImgUrl + imgPath;
              return (
                <article
                  className="list-item"
                  key={id}
                  onClick={() => dispatch(openModal(item))}
                >
                  <img src={img} alt={movieTitle} />
                  <div className="list-item-info">
                    <article className="list-item-btn-container">
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
                          deleteItem(id);
                        }}
                      >
                        <FaMinus />
                      </button>
                      <button
                        className="circle-btn row-btn"
                        onClick={() => dispatch(openModal(item))}
                      >
                        <FaChevronDown />
                      </button>
                    </article>
                    <h5 className="list-item-movie-title">{movieTitle}</h5>
                    <p className="list-item-genres-container">
                      {genre_ids &&
                        genre_ids
                          .map((genreId, index) => {
                            const genre = genres.find(
                              g => g.id === genreId
                            )?.name;
                            return (
                              <span key={index} className="list-item-genres">
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
        )}
      </div>
    </section>
  );
};

export default List;
