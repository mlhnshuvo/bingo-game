import * as Types from "../constants/UserType";
import setAuthToken from "../../utils/setAuthToken";
import axios from "../../utils/axios";
import jwt_decode from "jwt-decode";
import alertAction from "./alertAction";

export const userRegister = (user, navigate) => (dispatch) => {
  axios
    .post("/user/register", user)
    .then((response) => {
      dispatch({
        type: Types.REGISTER_USER,
        payload: {
          user: response.data,
        },
      });
      dispatch(alertAction("Thanks for register!"));
      navigate("/login");
    })
    .catch((err) => {
      dispatch({
        type: Types.REGISTER_USER_ERROR,
        payload: {
          error: err.response.data,
        },
      });
      dispatch(alertAction(err.response.data.fullName));
      dispatch(alertAction(err.response.data.cpf));
      dispatch(alertAction(err.response.data.email));
      dispatch(alertAction(err.response.data.telePhone));
      dispatch(alertAction(err.response.data.password));
      dispatch(alertAction(err.response.data.invitationCode));
    });
};

export const userLogin = (user, navigate) => (dispatch) => {
  axios
    .post("/user/login", user)
    .then((response) => {
      console.log(response);
      var decoded = jwt_decode(response.data.token);
      dispatch({
        type: Types.LOGIN_USER,
        payload: {
          user: decoded,
        },
      });
      setAuthToken(response.data.token);
      localStorage.setItem("token", response.data.token);
      dispatch(alertAction("Welcome back!"));
      navigate("/profile");
    })
    .catch((err) => {
      dispatch({
        type: Types.LOGIN_USER_ERROR,
        payload: {
          error: err.response,
        },
      });
      dispatch(alertAction(err.response.data.email));
      dispatch(alertAction(err.response.data.password));
      dispatch(alertAction(err.response.data.message));
    });
};

export const isAuthenticate = () => (dispatch) => {
  const token = localStorage.getItem("token");
  if (token) {
    var decoded = jwt_decode(token);
    var dateNow = new Date();
    if (decoded.exp * 1000 < dateNow.getTime()) {
      dispatch({
        type: Types.ISAUTHENTICATE,
        payload: {
          isAuthenticate: false,
        },
      });
      localStorage.removeItem("token");
    } else {
      const token = localStorage.getItem("token");
      const user = jwt_decode(token);
      dispatch({
        type: Types.ISAUTHENTICATE,
        payload: {
          isAuthenticate: true,
          user
        },
      });
    }
  } else {
    dispatch({
      type: Types.ISAUTHENTICATE,
      payload: {
        isAuthenticate: false,
      },
    });
  }
};

export const logout = (navigate) => (dispatch) => {
  dispatch({
    type: Types.LOGOUT_USER,
    payload: {
      isAuthenticate: false,
    },
  });
  localStorage.removeItem("token");
  navigate("/login");
};
