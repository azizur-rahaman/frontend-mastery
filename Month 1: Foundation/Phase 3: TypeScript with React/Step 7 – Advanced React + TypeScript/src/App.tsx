import { useReducer, useState } from "react";
import { ThemeProvider } from "./components/theme";
import { useTheme } from "./hooks/themehooks";

interface State {
  count: number;
}

type Action = {type: "INCREMENT"} | {type: "DECREMENT"} | {type: "RESET"};
const initialState: State = {count: 0};

function reducer(state: State, action: Action): State {
    switch(action.type) {
      case "INCREMENT" : return { count: state.count + 1 };
      case "DECREMENT" : return { count: state.count - 1 };
      case "RESET" : return { count: 0 };
      default: return state;
    }
}

const ThemeToggle = () => {
  const {theme, toggleTheme} = useTheme();
  return (
    <div className={theme}>
        <h1>{theme === "light" ? "Light" : "Dark"} Mode</h1>
        <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  )
}

const App: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
   <ThemeProvider>
    <ThemeToggle/>
     <main style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>{state.count}</h1>
      <button onClick={() => dispatch({type: "INCREMENT"})}>+</button>
      <button onClick={() => dispatch({type: "DECREMENT"})} >-</button>
      <button onClick={() => dispatch({type: "RESET"})}>Reset</button>
    </main>
   </ThemeProvider>
  );
};

export default App;
