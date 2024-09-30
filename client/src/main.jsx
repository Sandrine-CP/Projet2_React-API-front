import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App";
import Resas from "./pages/Resas";
import Accueil from "./pages/Accueil";
import Nosprestations from "./pages/NosPrestations";
import Labels from "./pages/Labels";
import Contact from "./pages/Contact";
import DestinationChoisie from "./pages/DestinationChoisie";
import Destinations from "./pages/Destinations";
import DestinationsSansScroll from "./pages/DestinationsSansScroll";
import EspaceClient from "./pages/EspaceClient";
import Criteres from "./components/Criteres";
import Connexion from "./pages/Connexion";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Accueil />,
      },
      {
        path: "/reservation",
        element: <Resas />,
      },
      {
        path: "/reservation/:id",
        element: <Resas />,
      },
      {
        path: "/labels",
        element: <Labels />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/destination/:id",
        element: <DestinationChoisie />,
      },
      {
        path: "/destinationchoisie",
        element: <DestinationChoisie />,
      },
      {
        path: "/destinations",
        element: <Destinations />,
      },
      {
        path: "/destinations/:urlPlanet?",
        element: <DestinationsSansScroll />,
      },
      {
        path: "/EspaceClient",
        element: <EspaceClient />,
      },
      {
        path: "/Criteres",
        element: <Criteres />,
      },
      {
        path: "/Connexion",
        element: <Connexion />,
      },
      {
        path: "/nosprestations",
        element: <Nosprestations />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
