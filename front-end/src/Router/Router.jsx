import { createBrowserRouter } from "react-router";
import App from "../App";
import Important from "../Pages/important";
import Planned from "../Pages/Planned";
import Tasks from "../Pages/Tasks";
import Login from "../Pages/Login";
import Register from "../Pages/Register";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/important",
    element: <Important />,
  },
  {
    path: "/planned",
    element: <Planned />,
  },
  {
    path: "/tasks",
    element: <Tasks />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  }

]);

export default router;
