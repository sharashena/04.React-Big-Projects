// components
import Banner from "../components/Banner";
import Rows from "../components/rows/Rows";

// helper
import { movieRows } from "../helpers/rows";

const Movies = () => {
  // fetch random banner
  const random = Math.floor(Math.random() * movieRows.length);
  const randomData = movieRows[random].url;
  return (
    <>
      <Banner banner={randomData} />
      <Rows rows={movieRows} />
    </>
  );
};

export default Movies;
