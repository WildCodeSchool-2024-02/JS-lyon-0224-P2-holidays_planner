import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import HomePage from "./components/HomePage/HomePage";
import FilterCountry from "./components/FilterCountry/FilterCountry";
<<<<<<< HEAD
import FilterCountryYear from "./components/FilterCountrYear/FilterCountryYear";
=======
// import Filterperiod from "";
>>>>>>> test-restructuration

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/filtercountry",
        element: <FilterCountry />,
      },
<<<<<<< HEAD
      {
        path: "/filtercountryyear",
        element: <FilterCountryYear />,
      },
=======
      // {
      //   path: "/filterperiod",
      //   element: <Filterperiod />,
      // },
>>>>>>> test-restructuration
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
