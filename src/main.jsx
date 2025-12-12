import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import App from "./App.jsx";
import Home from "./components/Pages/HomePage/Home.jsx";
import Upcoming from "./components/Pages/UpcomingPage/Upcoming.jsx";
import Category from "./components/Pages/CategoryPage/Category.jsx";

const router = createBrowserRouter([
  // Вынести в отдельный файл роутер
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
        element: <Category category="today" title="Today" />,
      },
      {
        path: "/tomorrow",
        element: <Category category="tomorrow" title="Tomorrow" />,
      },
      {
        path: "/week",
        element: <Category category="week" title="This Week" />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
