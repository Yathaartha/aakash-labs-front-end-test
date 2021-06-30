import { FETCH_CURRENCIES } from "../actions/types";

const INITIAL_STATE = {
  currencies: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_CURRENCIES:
      return { ...state, currencies: action.response };
    default:
      return { ...state };
  }
};
