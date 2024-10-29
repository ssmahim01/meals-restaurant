import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import Home from "./components/Home/Home";
import Meals from "./components/Meals/Meals";
import About from "./components/About/About";
import MealDetails from "./components/MealDetails/MealDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: '/meals',
        loader: () => fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=b'),
        element: <Meals></Meals>
      },
      {
        path: '/meal/:idMeal',
        loader: ({params}) => fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.idMeal}`),
        element: <MealDetails></MealDetails>
      },
      {
        path: '/about',
        element: <About></About>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);