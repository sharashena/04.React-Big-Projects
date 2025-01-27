// components
import Row from "./Row";

const Rows = ({ rows }) => {
  return (
    <section className="section">
      <div className="section-center">
        {rows.map((row, index) => {
          return <Row key={index} {...row} />;
        })}
      </div>
    </section>
  );
};

export default Rows;
