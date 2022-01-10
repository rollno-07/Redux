import { BUY_CAKE, SELL_CAKE, RESET } from "./CakeType";

export const buyCake = (number = 1) => {
  return { type: BUY_CAKE, payload: number };
};

export const sellCake = (number = 1) => {
  return { type: SELL_CAKE, payload: number };
};

export const reset = {
  type: RESET,
};
