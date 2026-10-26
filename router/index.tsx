import { createBrowserRouter, Navigate } from "react-router-dom";

import { TopicListPage } from "../pages/TopicListPage";
import { TopicPage } from "../pages/TopicPage";
import { HomePage } from "../pages/homePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/modules" replace />,
  },
  {
    path: "/modules",
    element: <HomePage />,
  },
  {
    path: "/modules/:moduleId",
    element: <TopicListPage />,
  },
  {
    path: "/modules/:moduleId/topics/:topicId",
    element: <TopicPage />,
  },
  {
    path: "*",
    element: (
      <h1 style={{ paddingTop: 20 + "%" }}>404: Сторінку не знайдено</h1>
    ),
  },
]);
