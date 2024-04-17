import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Home from "./components/Home/Home";
import FilterCountry from "./components/FilterCountry/FilterCountry";
import Calendar from "./components/Calender/Calendar";
import AboutUs from "./components/AboutUS/AboutUs";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/filtercountry",
        element: <FilterCountry />,
      },
      {
        path: "/calendar",
        element: <Calendar />,
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
