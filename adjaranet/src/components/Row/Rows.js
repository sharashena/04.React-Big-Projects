import { rows } from "../../helpers/rows";
import SingleRow from "./SingleRow";

const Row = () => {
  return (
    <section className="rows-section section">
      <div className="section-center rows-center">
        {rows.map((row, index) => {
          return <SingleRow {...row} key={index} />;
        })}
      </div>
    </section>
  );
};

export default Row;
