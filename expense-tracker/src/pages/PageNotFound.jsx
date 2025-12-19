import Header from "../components/Header";
import style from "../modules/PageNotFound.module.css";

export default function PageNotFound() {
  return (
    <div>
      <Header />
      <div className={style.error}>
        <h1>404 </h1>
        <h2>Page Not Found ‼️</h2>
      </div>
    </div>
  );
}
