// components
import Banner from "../components/Banner";
import Rows from "../components/rows/Rows";

// helper
import { browseRows } from "../helpers/rows";

const Home = () => {
  // fetch random banner
  const random = Math.floor(Math.random() * browseRows.length);
  const randomData = browseRows[random].url;

  return (
    <>
      <Banner banner={randomData} />
      <Rows rows={browseRows} />
    </>
  );
};

export default Home;
