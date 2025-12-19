import { NavLink } from "react-router-dom";
import style from "../modules/Header.module.css";
import { Logo } from "./logo";
export default function Header() {
  return (
    <header className={style.header}>
      <Logo />
      <nav className={style.nav}>
        <NavLink to="/login" className={style.login}>
          Login
        </NavLink>
      </nav>
    </header>
  );
}
