import { createBrowserRouter } from "react-router-dom";

import HomeLayout from "../layouts/Home";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import UserHome from "../pages/Dashboard/UserHome";
import DashboardLayout from "../layouts/Dashboard";
import AllUser from "../pages/Dashboard/AllUser";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
  {
    path: "dashboard",
    element: <DashboardLayout></DashboardLayout>,
    children: [
      {
        path: "userhome",
        element: <UserHome></UserHome>,
      },
      {
        path: "manage-users",
        element: <AllUser></AllUser>,
      },
    ],
  },
]);
