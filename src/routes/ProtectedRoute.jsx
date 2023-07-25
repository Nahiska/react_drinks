import { Outlet , Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export const ProtectedRoute = () => {
  const { currentUser } = useAuth();
      // Renderizado condicional
    // Si hay un usuario logeado permitile entrar a esta ruta que está protegiendo
    // caso contrario redirigir a login
  return currentUser ? (
    <Outlet />
  ) : (
    <Navigate to="/login" replace />
  );
}