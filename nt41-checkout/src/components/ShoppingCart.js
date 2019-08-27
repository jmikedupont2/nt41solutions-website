import React from "react";

class ShoppingCart extends React.Component {
  render() {
      return (
	<img alt="shopping cart" src={process.env.PUBLIC_URL +"/cart.svg"} />
    );
  }
}

export default ShoppingCart;
