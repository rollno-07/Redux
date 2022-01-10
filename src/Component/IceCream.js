import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { sellIceCream, buyIceCream } from "../redux";

function IceCream() {
  const numOfIceCream = useSelector((state) => state.iceCream.numOfIceCream);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>No. of IceCream:{numOfIceCream}</h2>
      <button onClick={() => dispatch(buyIceCream())}>Bye IceCream</button>
      <button onClick={() => dispatch(sellIceCream())}>Sell IceCream</button>
    </div>
  );
}

export default IceCream;
