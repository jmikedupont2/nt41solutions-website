import React from "react";

class GotoTop extends React.Component {
  render() {
      return (
	   <img alt="goto top" src={process.env.PUBLIC_URL +"/goto.svg"} />
 
    );
  }
}

export default GotoTop;
