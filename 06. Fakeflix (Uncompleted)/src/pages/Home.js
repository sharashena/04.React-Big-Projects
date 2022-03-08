import React from "react";
import { useGlobalContext } from "../context";
// components
import Row from "../components/Row";
import Banner from "../components/Banner";
// helper
import { rows } from "../helper/rows";
import SearchResults from "../components/SearchResults";

const Home = () => {
  const { query, open, handleOpen, handleClose } = useGlobalContext();

  return (
    <>
      {query ? (
        <SearchResults />
      ) : (
        <>
          <Banner
            openModal={open}
            handleOpenModal={handleOpen}
            handleCloseModal={handleClose}
          />
          {rows.map((row, index) => {
            const { title, fetchUrl, isLarge } = row;
            return (
              <Row
                title={title}
                fetchUrl={fetchUrl}
                key={index}
                isLarge={isLarge}
              />
            );
          })}
        </>
      )}
    </>
  );
};

export default Home;
