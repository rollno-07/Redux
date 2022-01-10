import { combineReducers, createStore, applyMiddleware } from "redux";
import CakeReducer from "./Cakes/CakeReducer";
import IceCreamReducer from "./iceCream/IceCreamReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";

const rootReducer = combineReducers({
  cake: CakeReducer,
  iceCream: IceCreamReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger))
);

export default store;
