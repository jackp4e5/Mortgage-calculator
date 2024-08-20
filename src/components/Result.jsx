export const Result = ({image,state}) => {
console.log(state);

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
