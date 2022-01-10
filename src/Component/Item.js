import React from "react";
import { connect } from "react-redux";
import { buyCake, buyIceCream } from "../redux";

function Item(props) {
  return (
    <div>
      <h2>Item-{props.item}</h2>
      <button onClick={props.buyItem}>buyItem</button>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  const itemeState = ownProps.cake
    ? state.cake.numOfCake
    : state.iceCream.numOfIceCream;
  return {
    item: itemeState,
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  const dispatchFunction = ownProps.cake
    ? () => dispatch(buyCake())
    : () => dispatch(buyIceCream());
  return {
    buyItem: dispatchFunction,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Item);
