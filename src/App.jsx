import "./App.css";
import { Form } from "./components/Form";
import  image from "./assets/illustration-empty.svg"

function App() {
  return (
    <main className="Mortgage">
      <section className="Mortgage__container">
        <h1 className="Mortgage__heading">Mortgage Calculator</h1>
        <a className="Mortgage__button" href="#">Clear All</a>
        <Form />
      </section>
      <div className="result">
        <img className="result__img" src={image} alt="" />
        <section className="result__wrapper">
          <h2 className="result__heading">Results shown here</h2>
          <p className="result__text">
            Complete the form and click “calculate repayments” to see what your
            monthly repayments would be.
          </p>
        </section>
      </div>
    </main>
  );
}

export default App;
