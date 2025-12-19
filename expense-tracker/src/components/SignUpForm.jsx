import { NavLink } from "react-router-dom";
import Button from "./Button";
import style from "../modules/SignUpForm.module.css";
import { useState } from "react";
import { userCreated } from "../context/SignupContext";

export default function SignUpForm() {
  const { dispatch, users } = userCreated();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function addUser(e) {
    e.preventDefault();
    if (!fullName || !email || !password) return;

    const newUser = {
      fullName,
      email,
      password,
      timeCreeated: new Date().toDateString(),
      isAuthenticated: false,
    };

    // setUser((prevUser) => [...prevUser, newUser]);

    dispatch({ type: "user/created", payload: newUser });

    setEmail("");
    setFullName("");
    setPassword("");

    console.log(newUser);
  }

  return (
    <form className={style.form} onSubmit={addUser}>
      <div>
        <h1>Create Account</h1>
        <p>
          Create account and start managing your finances. You already have an
          account?
          <NavLink to="/login">Login here</NavLink>
        </p>
      </div>
      <input
        type="text"
        placeholder=" full name"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
      />
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

      <Button type="submit">Create Account</Button>
      <p>{users.length}</p>
    </form>
  );
}
