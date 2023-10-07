import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root/Root";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import Error from "./Components/Error/Error";
import EduCard from "./Components/EduCard/EduCard";
import ContactUs from "./Components/ContactUs/ContactUs";
import Blog from "./Components/Blog/Blog";
import AuthProvider from "./Provider/AuthProvider";
import PrivateRoute from "./Private/PrivateRoute";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/events.json"),
      },
      {
        path: "/eduCard/:id",
        element: <PrivateRoute><EduCard></EduCard></PrivateRoute>,
        loader: () => fetch("/events.json"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/contact",
        element: <PrivateRoute><ContactUs></ContactUs></PrivateRoute>,
      },
      {
        path: "/blog",
        element: <PrivateRoute><Blog></Blog></PrivateRoute>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
