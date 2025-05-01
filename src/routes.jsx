import App from "./App";
import ErrorPage from "./ErrorPage";
import Products from "./products";
import Home from "./home";
import Cart from "./cart";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "account",
        element: <ErrorPage />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
    ],
  },
];

export default routes;
