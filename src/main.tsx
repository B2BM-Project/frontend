import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider, useRouteError  } from "react-router-dom";
import Learn from "./pages/Learn.tsx";
import Challenge from "./pages/Challenge.tsx";
import Competition from "./pages/Competition.tsx";
import Package from "./pages/Package.tsx";
import App from "./App.tsx";
import TopicDetail from "./pages/TopicDetail.tsx";
import Profile from "./pages/Profile.tsx"
import Score from "./pages/Score.tsx";
import Editprofile from "./pages/Editprofile.tsx";
import SelectLesson from "./pages/SelectLesson.tsx";
import CreateRoom from "./pages/CreateRoom.tsx";
import CreateTask from "./pages/CreateTask.tsx";
import Lobby from "./pages/Lobby.tsx";
import ErrorBoundary from "./components/ErrorBoundary.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    //errorElement: <ErrorBoundary error={null} />,
  },
  {
    path: "/learn",
    element: <Learn/>,
    //errorElement: <ErrorBoundary error={null} />,
  },
  {
    path: "/challenge",
    element: <Challenge/>,
    //errorElement: <ErrorBoundary error={null} />,
  },
  {
    path: "/competition",
    element: <Competition/>,
    //errorElement: <ErrorBoundary error={null} />,
  },
  {
    path: "/package",
    element: <Package/>,
    //errorElement: <ErrorBoundary error={null} />,
  },
  {
    path: "/topic-detail",
    element: <TopicDetail/>,
    //errorElement: <ErrorBoundary error={null} />,
  },
  {
    path: "/profile",
    element: <Profile/>,
    //errorElement: <ErrorBoundary error={null} />,
  },
  {
    path: "/select-lesson",
    element: <SelectLesson/>,
    //errorElement: <ErrorBoundary error={null} />,
  },
  {
    path: "/create-room",
    element: <CreateRoom/>,
    //errorElement: <ErrorBoundary error={null} />,
  },
  {
    path: "/lobby-room/:id",
    element: <Lobby/>,
    //errorElement: <ErrorBoundary error={null} />,
  },
  {
    path: "/create-task",
    element: <CreateTask/>,
    //errorElement: <ErrorBoundary error={null} />,
  },
  {
    path: "/score",
    element: <Score/>,
    //errorElement: <ErrorBoundary error={null} />,
  },
  {
    path: "/editprofile",
    element: <Editprofile/>,
    //errorElement: <ErrorBoundary error={null} />,
  },
 ]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
