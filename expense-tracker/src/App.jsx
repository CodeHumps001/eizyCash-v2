import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Homepage from "./pages/Homepage";
import Dashboard from "./pages/Dashboard";
import PageNotFound from "./pages/PageNotFound";
import { SignupProvider } from "./context/SignupContext";
import { LoginAuthProvider } from "./context/LoginAuthContext";
import ProtectedRoute from "./context/ProtectedRoute";

function App() {
  return (
    <SignupProvider>
      <LoginAuthProvider>
        <BrowserRouter>
          <Routes>
            <Route index element={<Homepage />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </LoginAuthProvider>
    </SignupProvider>
  );
}

export default App;
