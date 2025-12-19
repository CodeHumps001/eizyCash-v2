import { createContext, useContext, useReducer } from "react";
import { userCreated } from "./SignupContext";

const LoginAuthContext = createContext();

const innitialState = {
  user: null,
  success: "",
  failed: "",
  isLoggedIn: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "login/success":
      return {
        ...state,
        user: action.payload,
        success: action.message,
        isLoggedIn: true,
        failed: "",
      };
    case "login/failed":
      return {
        ...innitialState,
        failed: action.message,
      };
    default:
      return state;
  }
}

function LoginAuthProvider({ children }) {
  const [{ user, success, failed, isLoggedIn }, dispatch] = useReducer(
    reducer,
    innitialState
  );
  const { users } = userCreated();

  function Login(email, password) {
    const currentUser = users.find(
      (client) => client.email === email && client.password === password
    );

    if (currentUser) {
      dispatch({
        type: "login/success",
        payload: currentUser,
        message: "Login Succesfull",
      });
      return true;
    } else {
      dispatch({ type: "login/failed", message: "Error login in" });
      return false;
    }
  }

  return (
    <LoginAuthContext.Provider
      value={{
        user,
        success,
        failed,
        Login,
        isLoggedIn,
      }}
    >
      {children}
    </LoginAuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(LoginAuthContext);

  if (context === undefined) throw new Error("Unknown action");

  return context;
}

export { useAuth, LoginAuthProvider };
