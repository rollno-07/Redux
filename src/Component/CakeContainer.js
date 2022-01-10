import React from "react";
import { buyCake, sellCake, reset } from "../redux";
import { connect } from "react-redux";
function CakeContainer(props) {
  return (
    <div>
      <h2>No of Cakes:{props.numOfCake}</h2>
      <button onClick={props.buyCake}>BuyCake</button>
      <button onClick={props.sellCake}>SellCake</button>
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
    buyCake: () => dispatch(buyCake()),
    sellCake: () => dispatch(sellCake()),
    reset: () => dispatch(reset),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
