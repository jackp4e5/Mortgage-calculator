export const MortgageReducer = (action, state = []) => {
  if (action === "save-data") {
    console.log(action.payload);

    return {
      ...state,
      state: [action],
    };
  }

  return state;
};
