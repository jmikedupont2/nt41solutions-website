import React from "react";
import Header2 from "./Header2";

class Header extends React.Component {
  render() {
    return (
      <header
        style={{
          boxSizing: "border-box",
          display: "block",
          position: "fixed",
          zIndex: 9999,
          width: "100%",
          backgroundColor: "transparent",
          WebkitTransition: "all .3s ease-in-out",
          MozTransition: "all .3s ease-in-out",
          OTransition: "all .3s ease-in-out",
          transition: "all .3s ease-in-out"
        }}
      >
        <Header2></Header2>
      </header>
    );
  }
}

export default Header;
