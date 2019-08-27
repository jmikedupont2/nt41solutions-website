import React from "react";

class ArrowSVG extends React.Component {
  render() {
      return (
	      <img alt="arrow" src={process.env.PUBLIC_URL +"/arrow.svg"} />
	 
       );
  }
}

export default ArrowSVG;
