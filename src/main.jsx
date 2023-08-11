import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Home from "./conceptualcomponents/simplefirebase/Home";
import Main from "./conceptualcomponents/simplefirebase/Main";
import Login from "./conceptualcomponents/simplefirebase/Login";
import Logout from "./conceptualcomponents/simplefirebase/Logout";
import Register from "./conceptualcomponents/simplefirebase/Register";
import Login58 from "./components58/Login";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element:<Home></Home>
      },
      {
        path: "/login",
        element: <Login58></Login58>//<Login></Login>
      },
      {
        path: "/logout",
        element:<Logout></Logout>
      },
      {
        path: "/register",
        element:<Register></Register>
      }


    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);