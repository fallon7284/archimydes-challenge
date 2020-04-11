import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import userReducer from "./reducers/user";
import storiesReducer from "./reducers/stories";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  user: userReducer,
  stories: storiesReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;
