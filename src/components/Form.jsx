import { useRef, useState } from "react";
import calculatorImg from "../assets/icon-calculator.svg";
import { validationFields } from "../handle";
const initialState = {
  "Mortgage Amount": "",
  "Mortgage Term": "",
  "Interes Rate": "",
  "type-Mortgage": "",
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

export const Form = ({ dispatch }) => {
  const current = useRef("target");
  const [list, setList] = useState(initialState);

  const handleBlur = (e) => {
    const isValidFild = ["repayment", "interest"].includes(e.target.id);

    setList({
      ...list,
      [e.target.id]: !isValidFild ? +e.target.value : e.target.value,
      [e.target.name]: e.target.value,
    });
  };
  const handleOnblur = (e) => {
    validationFields(e);
    if (
      list["Interes Rate"] !== "" &&
      list["Mortgage Amount"] !== "" &&
      list["Mortgage Term"] !== "" &&
      list["type-Mortgage"] !== ""
    ) {
      current.current.style.opacity = "1";
      console.log("ESTA LLENO");
    } else {
      current.current.style.opacity = "0.5";
      console.log("ESTA VACIO");
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch([{ type: "save-data", payload: list }]);
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
                  value={list[element.name]}
                  onChange={handleBlur}
                  onBlur={handleOnblur}
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
              <p className="text_error">this field is required</p>
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
              value={"repayment"}
              onChange={handleBlur}
              onSelect={handleBlur}
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
              value={"interest"}
              onChange={handleBlur}
              onSelect={handleBlur}
            />
            <label className="radio-group__label" htmlFor="interest">
              Interest Only
            </label>
          </div>
          <p className="text_error">this field is required</p>
        </div>
        <button ref={current} className="form__submit">
          {" "}
          <img src={calculatorImg} alt="" />
          Calculate Repayments
        </button>
      </form>
    </>
  );
};
