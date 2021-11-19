import * as Types from "../constants/GameType";

const init = {
  card: [],
  error: null,
};

const userReudcer = (state = init, action) => {
  switch (action.type) {
    case Types.SUBMIT_CARD: {
      const temp = [...state.card, action.payload];
      return {
        ...state,
        card: temp,
        error: null,
      };
    }
    case Types.SUBMIT_CARD_ERROR: {
      return {
        ...state,
        error: action.payload,
      };
    }
    case Types.GET_CARD: {
      return {
        ...state,
        card: action.payload,
        error: null,
      };
    }
    case Types.GET_CARD_ERROR: {
      return {
        ...state,
        error: action.payload,
      };
    }
    default:
      return state;
  }
};

export default userReudcer;
