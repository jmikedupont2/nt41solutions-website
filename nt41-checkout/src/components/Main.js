import React from "react";

class Main extends React.Component {
  render() {
    return (
      <div id="home" className="top_banner">
        <div className="img60-right">
            <img alt="nt-lyte-bottle" src="/nt41_bottle-1.png" />
            <img alt="grey-background" className="img60-right-bg" src="/grey.png"/>
        </div>
        <div className="container row col-lg-6 col-md-12">
          <h1 className="module">NT-Lyte</h1>
          <p className="module">
            Your natural Alkaline and Trace Mineral concentrate pH 12+
          </p>
          <a
            href="https://www.amazon.com/NT-Lyte-Concentrated-Alkaline-Solutions-Krasniqis/dp/B07G61N8WZ"
            className="module"
            target="_blank"
          >
            <img src="cart.svg" alt="shopping cart" />
            Buy now
          </a>
        </div>
      </div>
    );
  }
}

export default Main;
