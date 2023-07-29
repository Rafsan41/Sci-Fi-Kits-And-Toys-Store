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
import MyToysMain from "./app/Pages/MyToysPage/MyToysMain/MyToysMain.jsx";
import AddToys from "./app/Pages/MyToysPage/AddToys/AddToys.jsx";
import UpdateToys from "./app/Pages/MyToysPage/UpdateToys/UpdateToys.jsx";
import StoreAllProduct from "./app/Pages/StorePage/StoreAllProduct/StoreAllProduct.jsx";

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
        path: "/",
        element: <HomeMain />,
      },
      {
        path: "about",
        element: <AboutMain />,
      },
      {
        path: "allToys",
        element: <StoreMain />,
        Loder: () => fetch("http://localhost:5000/allToys"),
      },
      {
        path: "totalProducts",
        element: <StoreAllProduct />,
        Loder: () => fetch("http://localhost:5000/totalProducts"),
      },
      {
        path: "myToys",
        element: <MyToysMain />,
      },
      {
        path: "addProduct",
        element: <AddToys />,
      },
      {
        path: "/updateProduct/:id",
        element: <UpdateToys />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/updateProduct/${params.id}`),
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
