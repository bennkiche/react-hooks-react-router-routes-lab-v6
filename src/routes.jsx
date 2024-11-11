
import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Directors from "./pages/Directors";
import Actors from "./pages/Actors";
import Movie from "./pages/Movie";
import ErrorPage from "./pages/ErrorPage"; // We'll create this component later
import NavBar from "./components/NavBar";

const routes = [
  {
    path: "/",
    element: (
      <>
        <NavBar />
        <Home />
      </>
    ),
  },
  {
    path: "/directors",
    element: (
      <>
        <NavBar />
        <Directors />
      </>
    ),
  },
  {
    path: "/actors",
    element: (
      <>
        <NavBar />
        <Actors />
      </>
    ),
  },
  {
    path: "/movie/:id", // Dynamic route
    element: (
      <>
        <NavBar />
        <Movie />
      </>
    ),
  },
  {
    path: "*", // For error handling
    element: <ErrorPage />,
  },
];

export default routes;
