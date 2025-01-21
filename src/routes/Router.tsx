import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { routerGenerator } from "../utils/routesGenerator";
import { adminPaths } from "./Admin.route";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/admin",
    element: <App />,
    children: routerGenerator(adminPaths),
  },
  {
    path: "/faculty",
    element: <App />,
    children: routerGenerator(adminPaths),
  },
  {
    path: "/student",
    element: <App />,
    children: routerGenerator(adminPaths),
  },
]);

export default router;
