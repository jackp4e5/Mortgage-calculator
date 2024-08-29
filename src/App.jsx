import "./App.css";
import { Form } from "./components/Form";
import image from "./assets/illustration-empty.svg";
import { Result } from "./components/Result";
import { useReducer } from "react";
import { MortgageReducer } from "./reducer/Reducer";
export const initialState = [];
function App() {
  const [state, dispatch] = useReducer(MortgageReducer, initialState);

  return (
    <main className="Mortgage">
      <section className="Mortgage__container">
        <h1 className="Mortgage__heading">Mortgage Calculator</h1>
        <a className="Mortgage__button" href="" >
          Clear All
        </a>
        <Form dispatch={dispatch} />
      </section>
      <Result image={image} state={state} />
    </main>
  );
}

export default App;
