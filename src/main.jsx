import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary.jsx";
import { Home } from "./components/Home.jsx";
import { Movies } from "./components/Movies.jsx";
import { Genres } from "./components/Genres.jsx";
import { EditMovie } from "./components/EditMovie.jsx";
import { ManageCatalogue } from "./components/ManageCatalogue.jsx";
import { GraphQL } from "./components/GraphQL.jsx";
import { Login } from "./components/Login.jsx";
import { Movie } from "./components/Movie.jsx";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorBoundary />,
      children: [
        { index: true, element: <Home /> },
        { path: "/movies", element: <Movies /> },
        { path: "/movie/:id", element: <Movie /> },
        { path: "/genres", element: <Genres /> },
        { path: "/admin/movie/0", element: <EditMovie /> },
        { path: "/admin", element: <ManageCatalogue /> },
        { path: "/graphql", element: <GraphQL /> },
        { path: "/login", element: <Login /> },
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
