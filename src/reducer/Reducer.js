export const MortgageReducer = (action, state = []) => {
  if (action === "save-data") {
    return {
      ...state,
      state: [action],
    };
  }

  return state;
};
