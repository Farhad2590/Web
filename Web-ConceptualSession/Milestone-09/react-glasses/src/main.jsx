import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "./Components/NotFound";

import "./index.css";
import About from "./Pages/About/About";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Login/Register";
// import ProductDetail from "./Pages/ProductDetail/ProductDetail";
import Products from "./Pages/Products/Products";
import Root from "./Root";
import FirebaseProvider from "./FirebaseProvider/FirebaseProvider";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import ProductDetail from "./Pages/ProductDetail/ProductDetail";


const url = "https://my-json-server.typicode.com/faarhaan10/react-sunglasses/sunglasses";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: "",
        element: <Home />,
        loader: async () => fetch(url),
      },
      {
        path: "products",
        element: <Products />,
        loader: async () => fetch(url),
      },
      {
        path: "product/:id",
        element: <PrivateRoute>
          <ProductDetail></ProductDetail>
        </PrivateRoute>,
        loader: async ({ params }) => fetch(`${url}/${params.id}`)
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FirebaseProvider>
      <RouterProvider router={router} />
    </FirebaseProvider>
  </React.StrictMode>
);
