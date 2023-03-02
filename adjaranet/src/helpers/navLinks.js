import { FiMonitor } from "react-icons/fi";
import { BiMoviePlay } from "react-icons/bi";
import { BsPlayBtn } from "react-icons/bs";
import { RiMovie2Line } from "react-icons/ri";
import { TbMoodKid } from "react-icons/tb";

const links = [
  {
    icon: <FiMonitor />,
    name: "TV",
    path: "https://www.myvideo.ge/tv/pirvelitv",
  },
  {
    icon: <BiMoviePlay />,
    name: "ფილმები",
    hasPath: true,
    hasSubLinks: true,
    path: "movies",
  },
  {
    icon: <BsPlayBtn />,
    name: "სერიალები",
    hasPath: true,
    path: "tvseries",
  },
  {
    icon: <RiMovie2Line />,
    name: "CINEMANIA",
    path: "https://cinemania.ge/category/news/",
  },
  {
    icon: <TbMoodKid />,
    name: "საბავშვო",
    hasPath: true,
    path: "kids",
  },
];

const subLinks = [
  { title: "ყველა" },
  { title: "ანიმაცია" },
  { title: "დოკუმენტური" },
  { title: "თრეილერები" },
];

export { links, subLinks };
