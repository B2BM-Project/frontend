import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Learn from "./pages/Learn.tsx";
import Challenge from "./pages/Challenge.tsx";
import Competition from "./pages/Competition.tsx";
import Package from "./pages/Package.tsx";
import App from "./App.tsx";

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
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
