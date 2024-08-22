export const Result = ({ image, state }) => {
  console.log(
    state.length > 0 ? state[0].payload["Interes Rate"] : "Hola cris"
  );

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
          <p className="result-data__paragraph">
              yours monthly repayment     {" "} <span className="result-data__paragraph--span">{state[0].payload["Interes Rate"] } </span>
          </p>
          <p>
            hola<span>hola aqui</span>
          </p>
        </div>
      </section>
    </div>
  );
};
