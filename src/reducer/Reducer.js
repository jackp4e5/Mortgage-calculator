import { initialState } from "../components/Form";

initialState;

export const MortgageReducer = (action, state = initialState) => {

  if (action === "save-data") {
    return {
      ...state,
      state: action,
    };
  }

  return state;
};
