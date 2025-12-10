import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import App from "./App.jsx";
import Home from "./components/Pages/HomePage/Home.jsx";
import Upcoming from "./components/Pages/UpcomingPage/Upcoming.jsx";
import Today from "./components/Pages/Today.jsx";
import Tomorrow from "./components/Pages/Tomorrow.jsx";
import Week from "./components/Pages/Week.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/upcoming",
        element: <Upcoming />,
      },
      {
        path: "/today",
        element: <Today />,
      },
      {
        path: "/tomorrow",
        element: <Tomorrow />,
      },
      {
        path: "/week",
        element: <Week />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
