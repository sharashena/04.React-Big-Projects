// components
import Row from "./Row";
import Loading from "../Loading";

// rows
import { rows } from "../../helpers/rows";

// redux
import { useSelector } from "react-redux";
import Modal from "../Modal";
import { useRef, useState } from "react";

const Rows = () => {
  const { isLoadingRows, size } = useSelector(state => state.products);
  const currElRef = useRef(null);
  const [showModal, setShowModal] = useState(false);

  return (
    <section className="section">
      <div className="section-center">
        {isLoadingRows && <Loading />}
        {rows.map((row, index) => {
          return (
            <Row
              {...row}
              key={index}
              currElRef={currElRef}
              setShowModal={setShowModal}
              showModal={showModal}
            />
          );
        })}
        {size >= 1024 && <Modal currElRef={currElRef} showModal={showModal} />}
      </div>
    </section>
  );
};

export default Rows;
