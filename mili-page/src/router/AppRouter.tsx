
import { createBrowserRouter, RouterProvider } from "react-router";
import LandingPage from "../pages/LandingPage/LandingPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import HomePage from "../pages/HomePage/HomePage";
import ProfilePage from "../pages/ProfilePage/ProfilePage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";

const router = createBrowserRouter([
  {
    path: "",
    element: <LandingPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
    errorElement: <LoginPage />,
  },
  {
    path: "/home",
    element: <HomePage />,
    errorElement: <HomePage />,
  },
  {
    path: "/profile", // Ruta para la ProfilePage
    element: <ProfilePage />,
  },
  {
    path: "/register", // Ruta para la ProfilePage
    element: <RegisterPage />,
  },
]);

function AppRouter() {
  return <RouterProvider router={router} />;
}

export default AppRouter;
