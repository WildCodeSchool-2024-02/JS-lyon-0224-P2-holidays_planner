import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import HomePage from "./components/HomePage/HomePage";
import FilterCountry from "./components/FilterCountry/FilterCountry";
import FilterCountryYear from "./components/FilterCountrYear/FilterCountryYear";
import AboutUs from "./components/AboutUs/AboutUs";

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
      {
        path: "/filtercountryyear",
        element: <FilterCountryYear />,
      },
      {
        path: "/aboutus",
        element: <AboutUs />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
