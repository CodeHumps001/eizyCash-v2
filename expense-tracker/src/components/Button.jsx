import style from "../modules/Button.module.css";

export default function Button({ type, children }) {
  return <button className={style.btn}>{children}</button>;
}
