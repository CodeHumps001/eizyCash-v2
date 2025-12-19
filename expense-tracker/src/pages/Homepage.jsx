import { NavLink } from "react-router-dom";
import Header from "../components/Header";
import style from "../modules/Homepage.module.css";
import { createContext } from "react";
import StepsList from "../components/StepsList";

export const StepsContext = createContext();

export default function Homepage() {
  const steps = [
    {
      title: "Log Every Transaction",
      desc: "Quickly enter your daily expenses as they happen. Whether it's a coffee or a utility bill, eizyCash keeps your records organized.",
      icon: "💳",
      color: "var(--secondary-trust)",
    },
    {
      title: "Set Your Limits",
      desc: "Use smart category tabs to group your spending. Set monthly budget goals to ensure you never overspend on the things that matter.",
      icon: "🏷️",
      color: "var(--primary-growth)",
    },
    {
      title: "Visualize Progress",
      desc: "Watch your financial health improve through real-time charts. eizyCash analyzes your habits to show you where to save.",
      icon: "📈",
      color: "var(--text-main)",
    },
  ];
  return (
    <StepsContext.Provider value={{ steps }}>
      <div className={style.homepage}>
        <Header />

        <section className={style.hero}>
          <h2>
            Master Your <br /> Money with <span>eizyCash</span>
          </h2>
          <p>Track your spending and watch your savings grow with eizyCash.</p>

          <NavLink to="/login">Get Started for Free</NavLink>
        </section>
        <section className={style.how}>
          <h2>Financial Freedom in 3 Easy Steps</h2>
          <div className={style.steps}>
            <StepsList />
          </div>
        </section>
      </div>
    </StepsContext.Provider>
  );
}
