import { initialState } from "../components/Form";

initialState;

export const MortgageReducer = (state = initialState, action) => {
  console.log(action.payload);

  if (action === "save-data") {
    return {
      ...state,
      data: action.payload,
    };
  }

  return state;
};
