import * as Types from "../constants/CardNumber";

const init = {
  card: [],
  error: null,
};

const cardNumber = (state = init, action) => {
  switch (action.type) {
    case Types.GET_CARD_NUMBER: {
      return {
        card: action.payload,
        error: null,
      };
    }
    case Types.GET_CARD_NUMBER_ERROR: {
      return {
        ...state,
        error: action.payload,
      };
    }
    case Types.CARD_NUMBER_REMOVE: {
      const temp = [...state.card];
      const card = temp.filter((card) => card.id !== action.payload);
      return {
        card,
        error: null,
      };
    }
    case Types.CARD_NUMBER_REMOVE_ERROR: {
      return {
        ...state,
        error: action.payload,
      };
    }

    case Types.CARD_NUMBER_ADD_ERROR: {
      return {
        ...state,
        error: action.payload,
      };
    }
    default:
      return state;
  }
};

export default cardNumber;
