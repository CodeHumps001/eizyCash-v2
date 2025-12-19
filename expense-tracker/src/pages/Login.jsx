import style from "../modules/Login.module.css";
import Header from "../components/Header";

import LoginForm from "../components/LoginForm";

export default function Login() {
  return (
    <div>
      <Header />

      <div className={style.container}>
        <div className={style.left}>
          <img src="/logo.jpg" alt="logo" />
        </div>
        <div className={style.right}>
          <img src="/logo.jpg" alt="logo" />
        </div>
        <LoginForm />
      </div>
    </div>
  );
}
