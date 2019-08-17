import React from "react";
import ArrowSVG from "./ArrowSVG";

class Arrow extends React.Component {
  render() {
    return (
      <li
        className="col-xl-6 col-lg-12 col-md-6 col-sm-6"
        style={{
          boxSizing: "border-box",
          position: "relative",
          width: "100%",
          paddingRight: "15px",
          paddingLeft: "15px",
          fontSize: "24px",
          fontWeight: 500,
          marginBottom: "50px",
          lineHeight: "40px",
          display: "none"
        }}
      >
        <div
          style={{
            boxSizing: "border-box",
            display: "flex",
            alignItems: "center"
          }}
        >
          <ArrowSVG></ArrowSVG>
          Plant Based{" "}
        </div>
      </li>
    );
  }
}

export default Arrow;
