import { initialState } from "../components/Form";

initialState;

export const MortgageReducer = (state = initialState, action) => {
  console.log(action.payload);

  if (action === "save-data") {
    console.log(action.payload);

    return {
      ...state,
      state: action.payload,
    };
  }

  return state;
};
