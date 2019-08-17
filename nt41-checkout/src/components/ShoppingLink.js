import React from "react";
import ShoppingCart from "./ShoppingCart";

class ShoppingLink extends React.Component {
  render() {
    return (
      <a
        href="https://www.amazon.com/NT-Lyte-Concentrated-Alkaline-Solutions-Krasniqis/dp/B07G61N8WZ"
        className="module"
        target="_blank"
        style={{
          boxSizing: "border-box",
          textDecoration: "none",
          backgroundColor: "transparent",
          display: "inline-block",
          visibility: "hidden",
          marginTop: "75px",
          padding: "0 26px",
          fontSize: "18px",
          lineHeight: "58px",
          color: "#85c226",
          border: "2px solid #85c226",
          borderRadius: "10px",
          WebkitTransition: "all .3s ease-in-out",
          MozTransition: "all .3s ease-in-out",
          OTransition: "all .3s ease-in-out",
          transition: "all .3s ease-in-out"
        }}
      >
        <ShoppingCart></ShoppingCart>Buy now
      </a>
    );
  }
}

export default ShoppingLink;
