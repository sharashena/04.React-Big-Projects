// redux
import { useSelector } from "react-redux";

// helper
import { textFormat } from "../helpers/textFormat";

const Modal = ({ currElRef, showModal }) => {
  const {
    modal,
    genres: productGenres,
    credits,
  } = useSelector(state => state.products);
  const { cast, crew } = credits;

  const {
    genre_ids,
    original_title,
    original_name,
    title: t,
    name,
    release_date,
    first_air_date,
    overview,
  } = modal;

  const releaseDate = release_date || first_air_date;
  const title = original_name || original_title || t || name;

  return (
    <aside className={showModal ? "modal show-modal" : "modal"} ref={currElRef}>
      <h2 className="modal-product-title">{title}</h2>
      <hr />
      <div className="modal-product-info">
        {/* release date */}
        {/* release date */}
        {/* release date */}
        <p className="modal-product-releaseDate">
          გამოშვების წელი: <span>{releaseDate?.slice(0, 4)}</span>
        </p>

        {/* director */}
        {/* director */}
        {/* director */}
        {crew && (
          <p>
            რეჟისორი:
            {crew
              .filter(crew => {
                if (crew) {
                  return crew.job.startsWith("Director");
                }
              })
              .map(({ name, original_name }, index) => {
                return (
                  <span className="crew" key={index}>
                    {name || original_name}
                  </span>
                );
              })
              .slice(0, 2)}
          </p>
        )}
        {/* casts */}
        {/* casts */}
        {/* casts */}
        {cast && (
          <p>
            როლებში:
            {cast
              .filter(c => c.known_for_department === "Acting")
              .map(({ name, original_name }, index) => {
                return (
                  <span className="cast" key={index}>
                    {name || original_name}
                  </span>
                );
              })
              .slice(0, 2)}
          </p>
        )}

        {/* genres */}
        {/* genres */}
        {/* genres */}
        <p className="modal-product-genres">
          ჟანრი:{" "}
          {genre_ids
            ?.map(genreID =>
              productGenres
                .filter(product => product.id === genreID)
                .map((product, index) => {
                  return (
                    <span className="genre" key={index}>
                      {product.name}
                    </span>
                  );
                })
            )
            .slice(0, 3)}
        </p>

        {/* description */}
        {/* description */}
        {/* description */}
        <p className="modal-product-desc">
          მოკლე აღწერა:
          <span>
            {textFormat(overview?.length, overview) || "No Description"}
          </span>
        </p>
      </div>
    </aside>
  );
};

export default Modal;
