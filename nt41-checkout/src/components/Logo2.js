import React from "react";

class Logo2 extends React.Component {
  render() {
    return (
      <img
        src={process.env.PUBLIC_URL +"/nt41_logo.svg"}
        alt="logo"
        style={{
          boxSizing: "border-box",
          verticalAlign: "middle",
          borderStyle: "none",
          maxWidth: "100%"
        }}
      />
    );
  }
}

export default Logo2;
