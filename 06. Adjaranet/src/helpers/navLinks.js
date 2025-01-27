import { BiMoviePlay } from "react-icons/bi";
import { BsPlayBtn } from "react-icons/bs";
import { PiTelevisionSimpleThin } from "react-icons/pi";

export const navLinks = [
  {
    title: "ფილმები",
    path: "movies",
    icon: <BiMoviePlay />,
    hasPath: true,
  },
  {
    title: "სერიალები",
    path: "tvs",
    icon: <BsPlayBtn />,
    hasPath: true,
  },
  {
    title: "ტელევიზია",
    path: "https://www.myvideo.ge/tv/pirvelitv",
    hasPath: false,
    icon: <PiTelevisionSimpleThin />,
  },
];
