import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../components/Home/Home";
import Signup from "../pages/Auth/Signup";
import Signin from "../pages/Auth/Signin";
import AddBook from "../pages/Admin/AddBook";
import AdminUsers from "../pages/Admin/AdminUsers";
import AdminStore from "../pages/Admin/AdminStore";
import Profile from "../components/Profile/Profile";
import EmailVerification from "../components/Auth/EmailVerification";
import Error from "../pages/Error/Error";
import PageNotFound from "../pages/404/PageNotFound";
import PrivateRoute from "../utils/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: "",
        element: (
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        ),
      },
      {
        path: "admin/add",
        element: <AddBook />,
      },
      {
        path: "admin/users",
        element: <AdminUsers />,
      },
      {
        path: "admin/books",
        element: <AdminStore />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
      {
        path: "signin",
        element: <Signin />,
      },
      {
        path: "verify-email/:token",
        element: <EmailVerification />,
      },
      {
        path: "profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        path: "*",
        element: <PageNotFound />,
      },
    ],
  },
]);

export default router;
