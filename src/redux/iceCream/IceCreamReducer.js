import { BUY_ICECREAM, SELL_ICECREAM } from "./IceCreamType";

const initialState = {
  numOfIceCream: 20,
};

const IceCreamReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numOfIceCream: state.numOfIceCream - 1,
      };
    case SELL_ICECREAM:
      return {
        numOfIceCream: state.numOfIceCream + 1,
      };

    default:
      return state;
  }
};
export default IceCreamReducer;
