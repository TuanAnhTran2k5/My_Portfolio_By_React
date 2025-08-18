import React from "react";
import Home from "./pages/home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PagesProject from "./pages/pageProject/inxdex";
import PageAbout from "./pages/pagesAbout";
import PageContact from "./pages/PageContact";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/project",
      element: <PagesProject />,
    },
    {
      path: "/about",
      element: <PageAbout />,
    },
    {
      path: "/contacts",
      element: <PageContact />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
