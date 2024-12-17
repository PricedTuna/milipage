import { createBrowserRouter, RouterProvider } from "react-router";
import LandingPage from "../pages/LandingPage/LandingPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import HomePage from "../pages/HomePage/HomePage";
import ProfilePage from "../pages/ProfilePage/ProfilePage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
import ProtectedRoute from "./ProtectedRoute"; // Importa el componente ProtectedRoute

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
    errorElement: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/home",
    element: <ProtectedRoute element={<HomePage />} />, // Ruta protegida
    errorElement: <HomePage />,
  },
  {
    path: "/profile",
    element: <ProtectedRoute element={<ProfilePage />} />, // Ruta protegida
  },
]);

function AppRouter() {
  return <RouterProvider router={router} />;
}

export default AppRouter;
