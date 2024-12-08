import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Learn from "./pages/Learn.tsx";
import Challenge from "./pages/Challenge.tsx";
import Competition from "./pages/Competition.tsx";
import Package from "./pages/Package.tsx";
import App from "./App.tsx";
import TopicDetail from "./pages/TopicDetail.tsx";
import SelectLesson from "./pages/SelectLesson.tsx";
import CreateRoom from "./pages/CreateRoom.tsx";
import CreateTask from "./pages/CreateTask.tsx";
import Lobby from "./pages/Lobby.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/learn",
    element: <Learn/>,
  },
  {
    path: "/challenge",
    element: <Challenge/>,
  },
  {
    path: "/competition",
    element: <Competition/>,
  },
  {
    path: "/package",
    element: <Package/>,
  },
  {
    path: "/topic-detail",
    element: <TopicDetail/>,
  },
  {
    path: "/select-lesson",
    element: <SelectLesson/>,
  },
  {
    path: "/create-room",
    element: <CreateRoom/>,
  },
  {
    path: "/lobby-room",
    element: <Lobby/>,
  },
  {
    path: "/create-task",
    element: <CreateTask/>,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
