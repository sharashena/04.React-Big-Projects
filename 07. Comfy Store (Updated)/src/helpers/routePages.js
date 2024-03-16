import { Home, About, Products, Single, Cart } from "../pages";

export const pages = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "products",
    element: <Products />,
  },
  {
    path: "products/:id",
    element: <Single />,
  },
  {
    path: "cart",
    element: <Cart />,
  },
];
