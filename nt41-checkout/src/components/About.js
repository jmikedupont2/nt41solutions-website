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
            src="/wp-content/uploads/2019/02/showcase.png"
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
            src="/wp-content/themes/nt41/images/grey2.png"
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
                    visibility: "hidden",
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
                    visibility: "hidden",
                    listStyle: "none",
                    paddingLeft: 0
                  }}
                >
                  <Arrow></Arrow>
                </ul>
                <a
                  href="#"
                  className="load__more module"
                  style={{
                    boxSizing: "border-box",
                    textDecoration: "none",
                    backgroundColor: "transparent",
                    visibility: "hidden",
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
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 70.13 36.23"
                    width="58.673"
                    height="44.607"
                    style={{
                      boxSizing: "border-box",
                      overflow: "hidden",
                      verticalAlign: "middle",
                      marginRight: "20px",
                      WebkitTransform: "rotate(180deg)",
                      MozTransform: "rotate(180deg)",
                      msTransform: "rotate(180deg)",
                      OTransform: "rotate(180deg)",
                      transform: "rotate(180deg)",
                      willChange: "trasnform"
                    }}
                  >
                    <path
                      fill="#85c226"
                      d="M42.28,34.65,0,18.21l44.31-17C51.87-1.7,60,1,65.09,5.86l.17.17,0,0a16.48,16.48,0,0,1,4.8,12.52v.31a19.11,19.11,0,0,1-6.32,12.52l-.19.16-.06.06C57.83,36.6,49.49,37.45,42.28,34.65Z"
                      transform="translate(0)"
                      style={{
                        boxSizing: "border-box"
                      }}
                    />
                  </svg>
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
