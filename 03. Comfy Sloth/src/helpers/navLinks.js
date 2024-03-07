import { FaShoppingCart, FaUserPlus, FaUserMinus } from "react-icons/fa";

const links = [
  {
    label: "home",
    path: "/",
  },
  {
    label: "about",
    path: "about",
  },
  {
    label: "products",
    path: "products",
  },
];

const icons = [
  {
    label: "cart",
    icon: <FaShoppingCart />,
    path: "cart",
    hasCount: true,
  },
  {
    label: "login",
    icon: <FaUserPlus />,
    path: "login",
  },
];

export { links, icons };
