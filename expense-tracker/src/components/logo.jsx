import { NavLink } from "react-router-dom";
import style from "../modules/Logo.module.css";
export function Logo() {
  return (
    <NavLink to="/" className={style.logo}>
      <img src="/logo.jpg" alt="logo" />
      <h1>eizyCash</h1>
    </NavLink>
  );
}
