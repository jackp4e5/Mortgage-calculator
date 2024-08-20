import "./App.css";
import { Form, initialState } from "./components/Form";
import image from "./assets/illustration-empty.svg";
import { Result } from "./components/Result";
import { useReducer } from "react";
import { MortgageReducer } from "./reducer/Reducer";

function App() {
  const [list, dispatch] = useReducer(MortgageReducer, initialState);
console.log(list);


  return (
    <main className="Mortgage">
      <section className="Mortgage__container">
        <h1 className="Mortgage__heading">Mortgage Calculator</h1>
        <a className="Mortgage__button" href="#">
          Clear All
        </a>
        <Form dispatch={dispatch} list={list} />
      </section>
      <Result image={image} />
    </main>
  );
}

export default App;
