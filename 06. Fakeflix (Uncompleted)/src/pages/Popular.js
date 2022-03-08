import React from "react";
import { useGlobalContext } from "../context";
// components
import Row from "../components/Row";
import Banner from "../components/Banner";
// helper
import { popRequsts } from "../helper/rows";
import SearchResults from "../components/SearchResults";

const Popular = () => {
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
          {popRequsts.map((row, index) => {
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

export default Popular;
