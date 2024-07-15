import { useState } from "react";
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
  const [amountField, setAmoutField] = useState("");
  const [termtField, setTermField] = useState("");
  const [ratetField, setRateField] = useState("");
  const [interestFieldInteres, setInterestFieldInteres] = useState("");
  const [repaymentFieldInteres, setRepaymentFieldInteres] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setAmoutField(e.target[0].value);
    setTermField(e.target[1].value);
    setRateField(e.target[2].value);
    setInterestFieldInteres(e.target[3].value);
    setRepaymentFieldInteres(e.target[4].id);
    setTimeout(() => {
      console.log(
        amountField,
        termtField,
        ratetField,
        interestFieldInteres,
        repaymentFieldInteres
      );
    }, 500);
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="form">
        <div className="input__group">
          {mortgage.map((element, i) => (
            <div className="input__wrapper" key={element.name}>
              <label className={`form__label`} htmlFor={element.name}>
                {element.name}
              </label>
              <div className="mask">
                <input
                  className={`${
                    element.htmlFormLabel === "term" ||
                    element.htmlFormLabel === "rate"
                      ? "form__input form__input--right-padding"
                      : "form__input"
                  }`}
                  type="text"
                  id={element.name}
                  autoComplete="off"
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
              <p className="text_error">hola</p>
            </div>
          ))}
        </div>
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
