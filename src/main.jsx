import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary.jsx";
import { Home } from "./components/Home.jsx";
import { Movies } from "./components/Movies.jsx";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorBoundary />,
      children: [
        { index: true, element: <Home /> },
        { path: "/movies", element: <Movies /> },
      ],
    },
  ],
  { basename: "/bit02spa" }
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
