import React from "react";
import ShoppingLink from "./ShoppingLink";

class Home extends React.Component {
  render() {
    return (
      <div
        id="home"
        className="top__banner"
        style={{
          boxSizing: "border-box",
          position: "relative",
          height: "100vh",
          minHeight: "400px",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "bottom right",
          backgroundSize: "contain"
        }}
      >
        <div
          className="img60-right"
          style={{
            boxSizing: "border-box"
          }}
        >
            <img
	alt="bottle"
            src="/wp-content/uploads/2019/07/nt41_bottle-1.png"
            style={{
              boxSizing: "border-box",
              verticalAlign: "middle",
              borderStyle: "none",
              maxWidth: "100%",
              width: "48%",
              objectFit: "cover",
              float: "right",
              zIndex: 1,
              position: "absolute",
              right: 0,
              bottom: 0
            }}
          />
            <img
		alt="grey1"
            className="img60-right-bg"
            src="/wp-content/themes/nt41/images/grey.png"
            style={{
              boxSizing: "border-box",
              verticalAlign: "middle",
              borderStyle: "none",
              maxWidth: "100%",
              objectFit: "cover",
              float: "right",
              position: "absolute",
              right: 0,
              bottom: 0,
              width: "62.5%",
              zIndex: -1
            }}
          />
        </div>
        <div
          className="container"
          style={{
            boxSizing: "border-box",
            width: "100%",
            paddingRight: "15px",
            paddingLeft: "15px",
            marginRight: "auto",
            marginLeft: "auto",
            height: "100%"
          }}
        >
          <div
            className="row"
            style={{
              boxSizing: "border-box",
              display: "flex",
              msFlexWrap: "wrap",
              flexWrap: "wrap",
              marginRight: "-15px",
              marginLeft: "-15px",
              height: "100%",
              alignItems: "center"
            }}
          >
            <div
              className="col-lg-6 col-md-12"
              style={{
                boxSizing: "border-box",
                position: "relative",
                width: "100%",
                paddingRight: "15px",
                paddingLeft: "15px"
              }}
            >
              <h1
                className="module"
                style={{
                  boxSizing: "border-box",
                  marginTop: 0,
                  visibility: "hidden",
                  marginBottom: "30px",
                  fontSize: "62px",
                  lineHeight: "70px",
                  fontWeight: 700
                }}
              >
                NT-Lyte
              </h1>
              <p
                className="module"
                style={{
                  boxSizing: "border-box",
                  marginTop: 0,
                  marginBottom: "1rem",
                  visibility: "hidden",
                  fontSize: "22px",
                  lineHeight: "34px",
                  fontWeight: 500
                }}
              >
                Your natural Alkaline and Trace Mineral concentrate pH 12+
              </p>
              <ShoppingLink></ShoppingLink>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
