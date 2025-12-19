import { createContext, useContext, useReducer } from "react";

const SignUpContext = createContext();
const innitialState = {
  users: [],
  isLoading: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "user/created":
      return {
        ...state,
        users: [...state.users, action.payload],
        isLoading: false,
      };

    default:
      throw new Error("unknown action type");
  }
}

function SignupProvider({ children }) {
  const [{ users }, dispatch] = useReducer(reducer, innitialState);

  return (
    <SignUpContext.Provider value={{ users, dispatch }}>
      {children}
    </SignUpContext.Provider>
  );
}

function userCreated() {
  const context = useContext(SignUpContext);

  if (context === undefined) throw new Error("Unknown Error");

  return context;
}

export { userCreated, SignupProvider };
