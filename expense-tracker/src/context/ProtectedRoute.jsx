import { useNavigate } from "react-router-dom";
import { useAuth } from "./LoginAuthContext";
import { useEffect } from "react";

export default function ProtectedRoute({ children }) {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login", { replace: true });
    }
  }, [isLoggedIn, navigate]);

  return isLoggedIn ? children : null;
}
