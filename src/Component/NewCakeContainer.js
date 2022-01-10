import React, { useState } from "react";
import { buyCake, sellCake, reset } from "../redux";
import { connect } from "react-redux";
function NewCakeContainer(props) {
  const [number, setNumber] = useState(1);
  return (
    <div>
      <h2>No of Cakes:{props.numOfCake}</h2>
      <input
        type="text"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={() => props.buyCake(number)}>Buy{number}Cake</button>
      <button onClick={() => props.sellCake(number)}>Sell{number}Cake</button>
      <button onClick={props.reset}>Reset</button>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    numOfCake: state.cake.numOfCake,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: (number) => dispatch(buyCake(number)),
    sellCake: (number) => dispatch(sellCake(number)),
    reset: () => dispatch(reset),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer);
