import { useRef, useState } from "react";
import calculatorImg from "../assets/icon-calculator.svg";
import { validationFields } from "../handle";
const initialState = {
  amount: "",
  term: "",
  rate: "",
  typeMortgage: "",
  repayment: "",
  interest: "",
};

const mortgage = [
  {
    htmlFormLabel: "amount",
    htmlSpan: "£",
  },
  {
    htmlFormLabel: "term",
    htmlSpan: "years",
  },
  {
    htmlFormLabel: "rate",
    htmlSpan: "%",
  },
];

export const Form = ({ dispatch }) => {
  const current = useRef("target");
  const [list, setList] = useState(initialState);

  const handleChange = (e) => {
    if (
      list.amount !== "" &&
      list.rate !== "" &&
      list.term &&
      e.target.checked
    ) {
      current.current.style.opacity = "1";
      current.current.disabled = false;
     
    } else {
      current.current.style.opacity = "0.5";
    }
    
    setList({
      ...list,
      [e.target.id]: e.target.value,
      [e.target.name]: e.target.value,
    });
  };
  const handleOnblur = (e) => {
    validationFields(e);
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
            <div className="input__wrapper" key={element.htmlFormLabel}>
              <label className={`form__label`} htmlFor={element.htmlFormLabel}>
                {element.htmlFormLabel}
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
                  id={element.htmlFormLabel}
                  autoComplete="off"
                  value={list[element.htmlFormLabel]}
                  onChange={handleChange}
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
              ref={current}
              id="repayment"
              className="radio-group__input"
              type="radio"
              name="typeMortgage"
              value={"repayment"}
              onChange={handleChange}
              onSelect={handleChange}
            />
            <label className="radio-group__label" htmlFor="repayment">
              {" "}
              Repayment
            </label>
          </div>
          <div className="radio-group">
            <input
              ref={current}
              id="interest"
              className="radio-group__input"
              type="radio"
              name="typeMortgage"
              value={"interest"}
              onChange={handleChange}
            />
            <label className="radio-group__label" htmlFor="interest">
              Interest Only
            </label>
          </div>
          <p className="text_error">this field is required</p>
        </div>
        <button disabled={true} ref={current} className="form__submit">
          {" "}
          <img src={calculatorImg} alt="" />
          Calculate Repayments
        </button>
      </form>
    </>
  );
};
