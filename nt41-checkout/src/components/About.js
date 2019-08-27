import React from "react";
import Arrow from "./Arrow";
import About2 from "./About2";

class About extends React.Component {
  render() {
    return (
      <div
        className="showcase__about__bg"
        style={{
          boxSizing: "border-box",
          position: "relative",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          backgroundAttachment: "scroll",
          backgroundPosition: "0 0"
        }}
      >
        <div
          className="img60-left"
          style={{
            boxSizing: "border-box"
          }}
        >
            <img
    	    alt="showcase"
        src={process.env.PUBLIC_URL +"/showcase.png"}
            style={{
              boxSizing: "border-box",
              verticalAlign: "middle",
              borderStyle: "none",
              maxWidth: "100%",
              width: "44.6%",
              objectFit: "cover",
              float: "left",
              position: "absolute",
              left: 0,
              top: 0
            }}
          />
            <img
	alt="showcase-2"
            className="img60-left-bg"
        src={process.env.PUBLIC_URL +"/grey2.png"}
        style={{
              boxSizing: "border-box",
              verticalAlign: "middle",
              borderStyle: "none",
              maxWidth: "100%",
              objectFit: "cover",
              float: "left",
              position: "absolute",
              left: 0,
              top: 0,
              width: "63.5%",
              zIndex: -1
            }}
          />
        </div>
        <div
          id="showcase"
          className="block block--padding"
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
                className="col-lg-6 offset-lg-6 "
                style={{
                  boxSizing: "border-box",
                  position: "relative",
                  width: "100%",
                  paddingRight: "15px",
                  paddingLeft: "15px"
                }}
              >
                <h3
                  className="block__subtitle module"
                  style={{
                    boxSizing: "border-box",
                    marginTop: 0,
                    fontSize: "34px",
                    lineHeight: "55px",
                    fontWeight: 500,
                   
                    marginBottom: "80px"
                  }}
                >
                  Enhance your well-being with the benefits of naturally sourced
                  alkalizing Trace Minerals.
                </h3>
                <ul
                  className="row module"
                  style={{
                    boxSizing: "border-box",
                    marginTop: 0,
                    marginBottom: "1rem",
                    display: "flex",
                    msFlexWrap: "wrap",
                    flexWrap: "wrap",
                    marginRight: "-15px",
                    marginLeft: "-15px",
                   
                    listStyle: "none",
                    paddingLeft: 0
                  }}
                >
                  <Arrow name="funky"></Arrow>
                </ul>
                <a
                  href="#"
                  className="load__more module"
                  style={{
                    boxSizing: "border-box",
                    textDecoration: "none",
                    backgroundColor: "transparent",
                   
                    display: "flex",
                    alignItems: "center",
                    marginTop: "90px",
                    fontSize: "29px",
                    lineHeight: "38px",
                    fontWeight: 500,
                    color: "#000",
                    WebkitTransition: "color .3s ease-in-out",
                    MozTransition: "color .3s ease-in-out",
                    OTransition: "color .3s ease-in-out",
                    transition: "color .3s ease-in-out"
                  }}
                >
              
              <img alt="arrow" src={process.env.PUBLIC_URL +"/arrow.svg"} />
            <span
                    style={{
                      boxSizing: "border-box"
                    }}
                  >
                    View All Specifications
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <About2></About2>
      </div>
    );
  }
}

export default About;
