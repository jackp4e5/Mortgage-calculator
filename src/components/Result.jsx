import { useEffect } from "react";

export const Result = ({ image, state }) => {
  useEffect(() => {
    if (state.length === 0) {
      console.log("esta vacio");
    } else {
      console.log("esta esta lleno");
      console.log(state[0].payload["type-Mortgage"]);
    }
  }, [state]);

  return (
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
  );
};
