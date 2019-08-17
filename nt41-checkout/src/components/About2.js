import React from "react";

class About2 extends React.Component {
  render() {
    return (
      <div
        id="about"
        className="block block--padding about"
        style={{
          boxSizing: "border-box",
          display: "inline-block",
          width: "100%",
          verticalAlign: "top",
          padding: "95px 0"
        }}
      >
        <div
          className="container"
          style={{
            boxSizing: "border-box",
            width: "100%",
            paddingRight: "15px",
            paddingLeft: "15px",
            marginRight: "auto",
            marginLeft: "auto"
          }}
        >
          <h3
            className="block__title module"
            style={{
              boxSizing: "border-box",
              marginTop: 0,
              fontWeight: 500,
              fontSize: "38px",
              lineHeight: "50px",
              visibility: "hidden",
              marginBottom: "80px"
            }}
          >
            Extracted from{" "}
            <span
              style={{
                boxSizing: "border-box",
                color: "#85c226"
              }}
            >
              virgin plants
            </span>
          </h3>
          <div
            className="row"
            style={{
              boxSizing: "border-box",
              display: "flex",
              msFlexWrap: "wrap",
              flexWrap: "wrap",
              marginRight: "-15px",
              marginLeft: "-15px"
            }}
          >
            <div
              className="col-lg-6 module"
              style={{
                boxSizing: "border-box",
                position: "relative",
                width: "100%",
                paddingRight: "15px",
                paddingLeft: "15px",
                visibility: "hidden"
              }}
            >
              <p
                style={{
                  boxSizing: "border-box",
                  marginTop: 0,
                  marginBottom: "1rem",
                  fontSize: "24px",
                  lineHeight: "50px",
                  color: "rgba(1,1,1,.73)",
                  fontWeight: 400
                }}
              >
                Ajtene's formula is a unique composition of naturally occurring
                Alkaline and Trace Minerals that enhance body's vital function
                and development.
              </p>
            </div>
            <div
              className="col-lg-6 module"
              style={{
                boxSizing: "border-box",
                position: "relative",
                width: "100%",
                paddingRight: "15px",
                paddingLeft: "15px",
                visibility: "hidden"
              }}
            >
              <p
                style={{
                  boxSizing: "border-box",
                  marginTop: 0,
                  marginBottom: "1rem",
                  fontSize: "24px",
                  lineHeight: "50px",
                  color: "rgba(1,1,1,.73)",
                  fontWeight: 400
                }}
              >
                Collected by hand, selected from the depths of wild nature.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About2;
