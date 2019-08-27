import React from "react";

class Body2 extends React.Component {
  render() {
    return (
      <div
        id="loader-wrapper"
         style={{
           boxSizing: "border-box",
           position: "fixed",
      top: 0,
        left: 0,
        width: "100%",
        height: "100%",
      zIndex: 99999
      }}
      >
        <div
          id="loader"
          style={{
            boxSizing: "border-box"
          }}
        /></div>
    
    );
  }
}

export default Body2;
