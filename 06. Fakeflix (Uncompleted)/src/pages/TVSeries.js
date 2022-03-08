import React from "react";
// components
import Row from "../components/Row";
import Banner from "../components/Banner";
// helper
import { tvRows } from "../helper/rows";
import SearchResults from "../components/SearchResults";
import { useGlobalContext } from "../context";

const TVSeries = () => {
  const { query, open, handleClose, handleOpen } = useGlobalContext();
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
          {tvRows.map((row, index) => {
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

export default TVSeries;
