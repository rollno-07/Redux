import { BUY_CAKE, SELL_CAKE, RESET } from "./CakeType";

const initialState = {
  numOfCake: 10,
};

const CakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCake: state.numOfCake - action.payload,
      };
    case SELL_CAKE:
      return {
        numOfCake: state.numOfCake + +action.payload,
      };
    case RESET:
      return {
        numOfCake: 0,
      };

    default:
      return state;
  }
};
export default CakeReducer;
