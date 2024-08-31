export const Result = ({ image, state }) => {
  let resultado, amount, term, rate, type;
  if (state[0]) {
    console.log(state[0].payload);

    amount = Number(state[0].payload.amount);
    term = Number(state[0].payload.term);
    rate = Number(state[0].payload.rate);
    type = state[0].payload.typeMortgage;

    resultado =
      type === "repayment" ? amount * (rate / 100) * term : "que pasa bro";
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
      <section className="result__wrapper--data">
        <h2 className="result__heading--data">Your results</h2>
        <p className="result__text">
          Your results are shown below based on the information you provided. to
          adjust the results, edit the form and click "calculate repayments"
          again
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
