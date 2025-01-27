// components
import Banner from "../components/Banner";
import Rows from "../components/rows/Rows";

// helper
import { tvRows } from "../helpers/rows";

const Series = () => {
  // fetch random banner
  const random = Math.floor(Math.random() * tvRows.length);
  const randomData = tvRows[random].url;

  return (
    <>
      <Banner banner={randomData} />
      <Rows rows={tvRows} />
    </>
  );
};

export default Series;
