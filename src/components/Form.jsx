import {  useState } from "react";
import calculatorImg from "../assets/icon-calculator.svg";
export const initialState = {
  "Mortgage Amount": 0,
  "Mortgage Term": 0,
  "Interes Rate": 0,
};
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

export const Form = ({ dispatch, list }) => {
  const [state, setState] = useState(initialState);

  const handleOnchange = (e) => {
    setState({
      ...state,
      [e.target.id]: +e.target.value,
    });
    console.log({ [e.target.id]: +e.target.value });
  };

  /*   const [list, dispatch] = useReducer((stateReducer = initialState, action) => {
    console.log(action.payload);

    return stateReducer;
  }); */

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch({ type: "save-data", payload: state });
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="form">
        <div className="input__group">
          {mortgage.map((element) => (
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
                  onChange={handleOnchange}
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
              value={"Repayment"}
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
              value={"Interest"}
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
};
