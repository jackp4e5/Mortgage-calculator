export const Result = ({ image, state }) => {
  let resultado, amount, term, interest, type;
  if (state[0]) {
    console.log(state[0].payload["Mortgage Amount"]);

    amount = state[0].payload["Mortgage Amount"];
    term = state[0].payload["Mortgage Term"];
    interest = state[0].payload["Interes Rate"];
    type = state[0].payload["type-Mortgage"];

    resultado =
      type === "repayment" ? amount * (interest / 100) * term : "que pasa bro";
  } else {
    console.log("no hay nada");
  }

  return state.length === 0 ? (
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
  ) : (
    <div className="result">
      <section className="result__wrapper">
        <h2 className="result__heading">Results</h2>
        <p className="result__text">
          Complete the form and click “calculate repayments” to see what your
          monthly repayments would be.
        </p>
        <div className="result-data">
          <p className="result-data__paragraph">your monthly repayment </p>
          <p className="result-data__result">{`£ ${resultado}`}</p>

          <hr />

          <p className="result-data__paragraph">
            Total you'll repay over the term{" "}
          </p>
          <p className="result-data__result-total">{`£ ${
            resultado + amount
          }`}</p>
        </div>
      </section>
    </div>
  );
};
