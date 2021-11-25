import * as Types from "../constants/CardNumber";
import axios from "../../utils/axios";

export const getCardNumber = () => (dispatch) => {
  axios
    .get("/number/get")
    .then((response) => {
      dispatch({
        type: Types.GET_CARD_NUMBER,
        payload: response.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: Types.GET_CARD_NUMBER_ERROR,
        payload: err.response,
      });
    });
};

export const deleteNumber = (id) => (dispatch) => {
  axios
    .delete("/number/delete/" + id)
    .then(() => {
      dispatch({
        type: Types.CARD_NUMBER_REMOVE,
        payload: id,
      });
    })
    .catch((err) => {
      dispatch({
        type: Types.CARD_NUMBER_REMOVE_ERROR,
        payload: err.data,
      });
    });
};

export const addNumber = (number) => (dispatch) => {
  axios
    .post("/number/add", number)
    .then(() => {
      dispatch(getCardNumber());
    })
    .catch((err) => {
      dispatch({
        type: Types.CARD_NUMBER_ADD_ERROR,
        payload: err.data,
      });
    });
};

export const addPrice = (id, price) => (dispatch) => {
  axios
    .put("/number/addprice/" + id, price)
    .then((response) => {
      dispatch({
        type: Types.CARD_NUMBER_ADD_PRICE,
        payload: response.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: Types.CARD_NUMBER_ADD_PRICE_ERROR,
        payload: err.data,
      });
    });
};
