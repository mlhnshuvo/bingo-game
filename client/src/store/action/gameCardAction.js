import * as Types from "../constants/GameType";
import axios from "../../utils/axios";

export const buyCard = (cardData) => (dispatch) => {
  axios
    .post("/card/select", { cardData })
    .then((response) => {
      dispatch({
        type: Types.SUBMIT_CARD,
        payload: response.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: Types.SUBMIT_CARD_ERROR,
        payload: err.response,
      });
    });
};

export const getCard = () => (dispatch) => {
  axios.get('/card/get')
  .then((response) => {
    console.log(response.data);
    dispatch({
      type: Types.GET_CARD,
      payload: response.data
    })
  })
  .catch((err) => {
    dispatch({
      type: Types.SUBMIT_CARD_ERROR,
      payload: err.response
    })
  })
};
