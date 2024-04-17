import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Home from "./components/Home/Home";
import FilterCountry from "./components/FilterCountry/FilterCountry";
import Calendar from "./components/Calender/Calendar";
import AboutUsMain from "./components/AboutUS/Main/AboutUsMain";

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
        element: <AboutUsMain />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
