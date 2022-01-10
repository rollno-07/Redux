import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyCake, reset, sellCake } from "../redux";

function HooksCakeContainer() {
  const noOfCake = useSelector((state) => state.cake.numOfCake);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>No. of Cake:{noOfCake}</h2>
      <button onClick={() => dispatch(buyCake())}>BuyCake</button>
      <button onClick={() => dispatch(sellCake())}>SellCake</button>
      <button onClick={() => dispatch(reset)}>Reset</button>
    </div>
  );
}

export default HooksCakeContainer;
