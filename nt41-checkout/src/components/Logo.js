import React from "react";

class Logo extends React.Component {
  render() {
    return (
      <img
        src="/wp-content/themes/nt41/images/nt41_logo.svg"
        alt="logo"
        style={{
          boxSizing: "border-box",
          verticalAlign: "middle",
          borderStyle: "none",
          maxWidth: "100%",
          height: "44px",
          WebkitTransition: "all .3s ease-in-out",
          MozTransition: "all .3s ease-in-out",
          OTransition: "all .3s ease-in-out",
          transition: "all .3s ease-in-out"
        }}
        height={44}
      />
    );
  }
}

export default Logo;
