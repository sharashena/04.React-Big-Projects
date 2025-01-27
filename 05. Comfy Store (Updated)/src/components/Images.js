import { useSelector } from "react-redux";

const Images = ({ currIndex, changeIndex }) => {
  const { singleProduct } = useSelector(state => state.products);

  const { name, images } = singleProduct;
  return (
    <div className="single-img-container">
      <img
        src={images && images[currIndex].url}
        alt={name}
        className="main-img"
      />
      <article className="extra-images">
        {images?.map((image, index) => {
          return (
            <img
              src={image.url}
              alt={name}
              key={index}
              className={
                index === currIndex ? "extra-img active-img" : "extra-img"
              }
              onClick={() => changeIndex(index)}
            />
          );
        })}
      </article>
    </div>
  );
};

export default Images;
