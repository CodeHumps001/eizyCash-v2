import { NavLink, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import style from "../modules/LoginForm.module.css";
import { useState } from "react";
import { useAuth } from "../context/LoginAuthContext";
export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { success, Login, failed } = useAuth();

  function userLogin(e) {
    e.preventDefault();
    if (!email || !password) setError("Fill in the fields");

    const found = Login(email, password);

    if (found) {
      setTimeout(() => navigate("/dashboard"), 3000);
    }
  }

  return (
    <form className={style.form} onSubmit={userLogin}>
      <div>
        <h1>Welcome Back</h1>
        <p>
          Access your financial world. Don't have an account?{" "}
          <NavLink to="/signup">Sign up</NavLink>
        </p>
      </div>
      <p className={success ? style.success : style.error}>
        {success ? success : failed}
      </p>
      <input
        type="email"
        placeholder=" Email Address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder=" Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <Button type="login">{success ? "Wait a second" : "Login"}</Button>
    </form>
  );
}
