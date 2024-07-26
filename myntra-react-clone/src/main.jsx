import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Home from "./routes/home.jsx"
import Bag from "./routes/bag.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {Provider} from "react-redux"
import myntrastore from "./store/index.js";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/bag",
        element: <Bag />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={myntrastore}>
    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
