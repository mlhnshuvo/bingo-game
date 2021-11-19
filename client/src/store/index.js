import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import userReducer from "./reducers/userReducer";
import gameCardReducer from "./reducers/gameCardReducer";
import cardNumberReducer from "./reducers/cardNumberReducer";
import alertReducer from "./reducers/alertReducer";
import thunk from "redux-thunk";

const middlewares = [thunk];
const middlewareEnhancer = applyMiddleware(...middlewares);
const enhancers = [middlewareEnhancer];
const composedEnhancers = composeWithDevTools(...enhancers);
const rootReducer = combineReducers({
  userReducer,
  gameCardReducer,
  cardNumberReducer,
  alertReducer,
});

const store = createStore(rootReducer, composedEnhancers);

export default store;
