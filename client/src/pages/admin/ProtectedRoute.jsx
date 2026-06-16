import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  return localStorage.getItem("adminToken") ? children : <Navigate to="/admin/login" replace />;
}
