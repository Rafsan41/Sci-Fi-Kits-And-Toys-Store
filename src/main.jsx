import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeMain from "./app/Pages/HomePage/HomeMain/HomeMain.jsx";
import AboutMain from "./app/Pages/AboutPage/AboutMain/AboutMain.jsx";
import StoreMain from "./app/Pages/StorePage/StoreMain/StoreMain.jsx";
import RegistationMain from "./app/Pages/RegistationPage/RegistationMain/RegistationMain.jsx";
import LogInMain from "./app/Pages/LogInPage/LogInMain/LogInMain.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/home",
        element: <HomeMain />,
      },
      {
        path: "about",
        element: <AboutMain />,
      },
      {
        path: "allToys",
        element: <StoreMain />,
      },
      {
        path: "register",
        element: <RegistationMain />,
      },
      {
        path: "login",
        element: <LogInMain />,
      },
      {
        path: "aboutUs",
        element: <AboutMain />,
      },
      {
        path: "login",
        element: <LogInMain />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
