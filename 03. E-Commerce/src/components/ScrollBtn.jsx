import React from "react";
// react-icons
import { FaAngleDoubleUp } from "react-icons/fa";

export const ScrollBtn = () => {
  const [height, setHeight] = React.useState(0);

  React.useEffect(() => {
    const scrollTo = window.addEventListener("scroll", () => {
      setHeight(window.pageYOffset);
    });
    return () => window.removeEventListener("scroll", scrollTo);
  });

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <button
      className={height > 150 ? "scroll-btn show-btn" : "scroll-btn"}
      onClick={scrollToTop}
    >
      <FaAngleDoubleUp className="icon" />
    </button>
  );
};
