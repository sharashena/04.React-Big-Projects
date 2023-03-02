import { useEffect } from "react";

// react icons
import { BsPlay } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";

// redux
import { useDispatch, useSelector } from "react-redux";
import { bannerThunk } from "../../redux/features/bannerSlice/bannerThunk";

// swiper
import { Swiper, SwiperSlide } from "swiper/react";
// swiper required modules
import { Pagination, Navigation, Keyboard, Autoplay } from "swiper";
// swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Link } from "react-router-dom";

const base_url = "https://image.tmdb.org/t/p/original";

const Hero = () => {
  const { banner } = useSelector(({ banner }) => banner);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(bannerThunk());
  }, []);

  const handleSubmit = e => e.preventDefault();

  return (
    <section>
      <div className="hero-center">
        <Swiper
          modules={[Keyboard, Pagination, Navigation, Autoplay]}
          navigation={true}
          pagination={{ dynamicBullets: true }}
          keyboard={{ enabled: true }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop={true}
        >
          {banner.map(
            ({
              id,
              backdrop_path,
              poster_path,
              original_title,
              title,
              name,
            }) => {
              const names = original_title || title || name;
              return (
                <SwiperSlide key={id}>
                  <Link>
                    <div>
                      <img
                        src={`${base_url}${backdrop_path || poster_path}`}
                        alt={names}
                        className="banner-img"
                      />
                      <span className="banner-play">
                        <BsPlay />
                      </span>
                      <div className="banner-name">
                        <h2>{names}</h2>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
              );
            }
          )}
        </Swiper>
        <div className="banner-form">
          <form className="banner-searchbar" onSubmit={handleSubmit}>
            <input
              type="search"
              className="banner-search-input"
              placeholder="ძიება"
            />
            <button className="banner-search-btn">
              <FaSearch />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Hero;
