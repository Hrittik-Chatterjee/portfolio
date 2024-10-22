import { createBrowserRouter } from "react-router-dom";

import AdminPortal from "../Admin/AdminPortal";
import AdminLogin from "../Admin/AdminLogin";
import Layout from "../layout/Layout";
import MainPage from "../MainPage/MainPage";
import ProtectedRoute from "./ProtectedRoute/ProtectedRoutes";
// Import the ProtectedRoute component

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <MainPage />,
      },
      {
        path: "/adminportal",
        element: (
          <ProtectedRoute>
            <AdminPortal />
          </ProtectedRoute>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: <AdminLogin />,
  },
]);
