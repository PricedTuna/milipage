import { Navigate } from "react-router";
import { useUser } from "../context/UserContext"; // Importa tu contexto de usuario

interface ProtectedRouteProps {
  element: JSX.Element;
}

const ProtectedRoute = ({ element }: ProtectedRouteProps) => {
  const { state } = useUser(); // Obtén el estado del usuario desde el contexto

  // Si no hay usuario, redirige a la página de login
  if (!state.user) {
    return <Navigate to="/login" replace />;
  }

  // Si hay usuario, muestra la página solicitada
  return element;
};

export default ProtectedRoute;
