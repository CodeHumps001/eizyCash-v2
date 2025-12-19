import { Form } from "react-router-dom";
import Header from "../components/Header";
import SignUpForm from "../components/SignUpForm";

export default function Signup() {
  return (
    <div>
      <Header />

      <div>
        <SignUpForm />
      </div>
    </div>
  );
}
