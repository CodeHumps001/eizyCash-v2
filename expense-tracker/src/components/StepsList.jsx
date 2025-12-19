import { useContext } from "react";
import { StepsContext } from "../pages/Homepage";
import style from "../modules/StepsList.module.css";

export default function StepsList() {
  const { steps } = useContext(StepsContext);

  return steps.map((step, i) => {
    return (
      <>
        <div className={style.card}>
          <span key={i}>{step.icon}</span>
          <h1>{step.title}</h1>
          <p>{step.desc}</p>
        </div>
      </>
    );
  });
}
