import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import HomeLayout from "./layouts/Home";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AuthProvider from "./providers/AuthProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import UserHome from "./pages/Dashboard/UserHome";
import DashboardLayout from "./layouts/Dashboard";
import AllUser from "./pages/Dashboard/AllUser";
import AdminRoute from "./Routes/AdminRoute";
import PrivateRoute from "./Routes/PrivateRoute";
import InstructorHome from "./pages/Dashboard/InstructorHome";
import AdminHome from "./pages/Dashboard/AdminHome";
import AddClass from "./pages/Dashboard/AddClass";
import MyClass from "./pages/Dashboard/instructor/MyClass";
import InstructorRoute from "./Routes/InstructorRoute";
import ManageClass from "./pages/Dashboard/admin/ManageClass";
import Classes from "./pages/Classes";
import Instructors from "./pages/Instructors";
import PageNotFound from "./pages/PageNotFound";
import MySelectedClass from "./pages/Dashboard/student/MySelectedClass";
import Payment from "./pages/Dashboard/student/Payment/Payment";
import PaymentHistory from "./pages/Dashboard/student/PaymentHistory";
const queryClient = new QueryClient();

const router = createBrowserRouter([
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
        path: "/classes",
        element: <Classes />,
      },
      {
        path: "/instructors",
        element: <Instructors />,
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
        path: "student-home",
        element: (
          <PrivateRoute>
            <UserHome></UserHome>
          </PrivateRoute>
        ),
      },
      {
        path: "selected-class",
        element: (
          <PrivateRoute>
            <MySelectedClass></MySelectedClass>
          </PrivateRoute>
        ),
      },
      {
        path: "payment",
        element: (
          <PrivateRoute>
            <Payment></Payment>
          </PrivateRoute>
        ),
      },
      {
        path: "payment-history",
        element: (
          <PrivateRoute>
            <PaymentHistory></PaymentHistory>
          </PrivateRoute>
        ),
      },
      {
        path: "instructor-home",
        element: (
          <PrivateRoute>
            <InstructorRoute>
              <InstructorHome></InstructorHome>
            </InstructorRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "add-class",
        element: (
          <PrivateRoute>
            <InstructorRoute>
              <AddClass></AddClass>
            </InstructorRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "instructor/my-class",
        element: (
          <PrivateRoute>
            <InstructorRoute>
              <MyClass></MyClass>
            </InstructorRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "admin-home",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <AdminHome></AdminHome>
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "manage-users",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <AllUser></AllUser>
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "manage-class",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <ManageClass></ManageClass>
            </AdminRoute>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <PageNotFound></PageNotFound>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>
);
