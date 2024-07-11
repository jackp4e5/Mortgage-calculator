import calculatorImg from "../assets/icon-calculator.svg";

export function Form() {
  const amount = {
    name: "Mortgage Amount",
    htmlFormLabel: "amount",
    htmlSpan: "£",
  };
  const term = {
    name: "Mortgage Term",
    htmlFormLabel: "term",
    htmlSpan: "years",
  };
  const rate = {
    name: "Interes Rate",
    htmlFormLabel: "rate",
    htmlSpan: "%",
  };
  const mortgage = [amount, term, rate];
  mortgage.forEach((item) => {
    item.htmlFormLabel === "rate" && item.htmlFormLabel === "term"
      ? console.log("cumple")
      : console.log(
          item.htmlFormLabel === "rate" || item.htmlFormLabel === "term"
        );
  });
  return (
    <>
      <form className="form">
        {mortgage.map((element, i) => (
          <div className="input__wrapper" key={element.name}>
            <label className={`form__label`} htmlFor={element.name}>
              {element.name}
            </label>
            <input
              className={`${
                element.htmlFormLabel === "term" ||
                element.htmlFormLabel === "rate"
                  ? "form__input--right-padding"
                  : "form__input"
              }`}
              type="text"
              id={element.name}
            />
            <span
              className={`${
                element.htmlFormLabel === "term"
                  ? "form__span  form__span--right-term"
                  : element.htmlFormLabel === "rate"
                  ? "form__span  form__span--right-rate"
                  : "form__span"
              }`}
            >
              {element.htmlSpan}
            </span>
          </div>
        ))}

        <div className="radio-wrapper">
          <p className="form__label">Mortgage Type</p>
          <div className="radio-group">
            <input
              id="repayment"
              className="radio-group__input"
              type="radio"
              name="type-Mortgage"
            />
            <label className="radio-group__label" htmlFor="repayment">
              {" "}
              Repayment
            </label>
          </div>
          <div className="radio-group">
            <input
              id="interest"
              className="radio-group__input"
              type="radio"
              name="type-Mortgage"
            />
            <label className="radio-group__label" htmlFor="interest">
              Interest Only
            </label>
          </div>
        </div>
        <button className="form__submit">
          {" "}
          <img src={calculatorImg} alt="" />
          Calculate Repayments
        </button>
      </form>
    </>
  );
}
