import React from "react";
import Logo2 from "./Logo2";
import GotoTop from "./GotoTop";

class Footer extends React.Component {
  render() {
    return (
      <footer
        className="footer"
        style={{
          boxSizing: "border-box",
          display: "block",
          background: "#fff"
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
                className="col-lg-7 col-md-12 footer__logo module"
                style={{
                  boxSizing: "border-box",
                  position: "relative",
                  width: "100%",
                  paddingRight: "15px",
                  paddingLeft: "15px",
                  visibility: "hidden"
                }}
              >
                <a
                  href="#home"
                  className="logo"
                  style={{
                    boxSizing: "border-box",
                    textDecoration: "none",
                    backgroundColor: "transparent",
                    display: "inline-block",
                    color: "rgba(1,1,1,.73)",
                    fontWeight: 400,
                    fontSize: "20px",
                    lineHeight: "50px",
                    WebkitTransition: "color .3s ease-in-out",
                    MozTransition: "color .3s ease-in-out",
                    OTransition: "color .3s ease-in-out",
                    transition: "color .3s ease-in-out",
                    marginBottom: "60px"
                  }}
                >
                  <Logo2 />
                </a>
              </div>
              <div
                className="col-lg-2 col-md-6 col-sm-6 module"
                style={{
                  boxSizing: "border-box",
                  position: "relative",
                  width: "100%",
                  paddingRight: "15px",
                  paddingLeft: "15px",
                  visibility: "hidden"
                }}
              >
                <h3
                  style={{
                    boxSizing: "border-box",
                    marginTop: 0,
                    marginBottom: "60px",
                    fontSize: "25px",
                    lineHeight: "40px",
                    fontWeight: 500
                  }}
                >
                  Menu
                </h3>
                <ul
                  style={{
                    boxSizing: "border-box",
                    marginTop: 0,
                    listStyle: "none",
                    paddingLeft: 0,
                    marginBottom: 0
                  }}
                >
                  <li
                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-7"
                    style={{
                      boxSizing: "border-box",
                      fontSize: "24px",
                      lineHeight: "50px",
                      fontWeight: 500
                    }}
                  >
                    <a
                      href="#home"
                      className="nav-link"
                      style={{
                        boxSizing: "border-box",
                        textDecoration: "none",
                        backgroundColor: "transparent",
                        display: "block",
                        color: "rgba(1,1,1,.73)",
                        fontWeight: 400,
                        fontSize: "20px",
                        lineHeight: "50px",
                        WebkitTransition: "color .3s ease-in-out",
                        MozTransition: "color .3s ease-in-out",
                        OTransition: "color .3s ease-in-out",
                        transition: "color .3s ease-in-out",
                        padding: 0
                      }}
                    >
                      Home
                    </a>
                  </li>
                  <li
                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-8"
                    style={{
                      boxSizing: "border-box",
                      fontSize: "24px",
                      lineHeight: "50px",
                      fontWeight: 500
                    }}
                  >
                    <a
                      href="#showcase"
                      className="nav-link"
                      style={{
                        boxSizing: "border-box",
                        textDecoration: "none",
                        backgroundColor: "transparent",
                        display: "block",
                        color: "rgba(1,1,1,.73)",
                        fontWeight: 400,
                        fontSize: "20px",
                        lineHeight: "50px",
                        WebkitTransition: "color .3s ease-in-out",
                        MozTransition: "color .3s ease-in-out",
                        OTransition: "color .3s ease-in-out",
                        transition: "color .3s ease-in-out",
                        padding: 0
                      }}
                    >
                      Showcase
                    </a>
                  </li>
                  <li
                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-9"
                    style={{
                      boxSizing: "border-box",
                      fontSize: "24px",
                      lineHeight: "50px",
                      fontWeight: 500
                    }}
                  >
                    <a
                      href="#about"
                      className="nav-link"
                      style={{
                        boxSizing: "border-box",
                        textDecoration: "none",
                        backgroundColor: "transparent",
                        display: "block",
                        color: "rgba(1,1,1,.73)",
                        fontWeight: 400,
                        fontSize: "20px",
                        lineHeight: "50px",
                        WebkitTransition: "color .3s ease-in-out",
                        MozTransition: "color .3s ease-in-out",
                        OTransition: "color .3s ease-in-out",
                        transition: "color .3s ease-in-out",
                        padding: 0
                      }}
                    >
                      About
                    </a>
                  </li>
                  <li
                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-10"
                    style={{
                      boxSizing: "border-box",
                      fontSize: "24px",
                      lineHeight: "50px",
                      fontWeight: 500
                    }}
                  >
                    <a
                      href="#contact"
                      className="nav-link"
                      style={{
                        boxSizing: "border-box",
                        textDecoration: "none",
                        backgroundColor: "transparent",
                        display: "block",
                        color: "rgba(1,1,1,.73)",
                        fontWeight: 400,
                        fontSize: "20px",
                        lineHeight: "50px",
                        WebkitTransition: "color .3s ease-in-out",
                        MozTransition: "color .3s ease-in-out",
                        OTransition: "color .3s ease-in-out",
                        transition: "color .3s ease-in-out",
                        padding: 0
                      }}
                    >
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
              <div
                className="col-lg-3 col-md-6 col-sm-6 footer__contact module"
                style={{
                  boxSizing: "border-box",
                  position: "relative",
                  width: "100%",
                  paddingRight: "15px",
                  paddingLeft: "15px",
                  visibility: "hidden"
                }}
              >
                <h3
                  style={{
                    boxSizing: "border-box",
                    marginTop: 0,
                    marginBottom: "60px",
                    fontSize: "25px",
                    lineHeight: "40px",
                    fontWeight: 500
                  }}
                >
                  Contact Us
                </h3>
                <p
                  style={{
                    boxSizing: "border-box",
                    marginTop: 0,
                    color: "rgba(1,1,1,.73)",
                    fontWeight: 300,
                    marginBottom: "10px",
                    fontSize: "20px",
                    lineHeight: "35px"
                  }}
                >
                  NT41 Solutions LLC
                  <br
                    style={{
                      boxSizing: "border-box"
                    }}
                  />
                  2187 Spruce Street
                  <br
                    style={{
                      boxSizing: "border-box"
                    }}
                  />
                  Ewing, NJ 08638
                </p>
                <a
                  href="tel:+1 (646) 504-2675"
                  style={{
                    boxSizing: "border-box",
                    textDecoration: "none",
                    backgroundColor: "transparent",
                    color: "rgba(1,1,1,.73)",
                    fontSize: "20px",
                    WebkitTransition: "color .3s ease-in-out",
                    MozTransition: "color .3s ease-in-out",
                    OTransition: "color .3s ease-in-out",
                    transition: "color .3s ease-in-out",
                    marginBottom: "5px",
                    fontWeight: 300,
                    display: "block",
                    margin: 0,
                    lineHeight: "40px"
                  }}
                >
                  +1 (646) 504-2675
                </a>
                <a
                  href="/cdn-cgi/l/email-protection#30595e565f705e440401435f5c4544595f5e431e535f5d"
                  style={{
                    boxSizing: "border-box",
                    textDecoration: "none",
                    backgroundColor: "transparent",
                    color: "rgba(1,1,1,.73)",
                    fontSize: "20px",
                    WebkitTransition: "color .3s ease-in-out",
                    MozTransition: "color .3s ease-in-out",
                    OTransition: "color .3s ease-in-out",
                    transition: "color .3s ease-in-out",
                    marginBottom: "5px",
                    fontWeight: 300,
                    display: "block",
                    margin: 0,
                    lineHeight: "40px"
                  }}
                >
                  <span
                    className="__cf_email__"
                    data-cfemail="264f484049664852121755494a53524f4948550845494b"
                    style={{
                      boxSizing: "border-box"
                    }}
                  >
                    [email protected]
                  </span>
                </a>
              </div>
            </div>
          </div>
          <hr
            style={{
              boxSizing: "content-box",
              height: 0,
              overflow: "visible",
              marginTop: "1rem",
              marginBottom: "1rem",
              border: 0,
              borderTop: "1px solid rgba(0,0,0,.1)",
              margin: 0,
              borderColor: "rgba(112,112,112,.33)"
            }}
          />
          <div
            className="copyright"
            style={{
              boxSizing: "border-box",
              padding: "30px 0"
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
                className="col-lg-7 col-md-12 module"
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
                    color: "rgba(1,1,1,.73)",
                    marginBottom: 0,
                    fontSize: "16px",
                    lineHeight: "50px",
                    fontWeight: 400
                  }}
                >
                  Copyright 2019 NT41 Solutions LLC, All rights reserved
                </p>
              </div>
              <div
                className="col-lg-3 col-md-6 col-sm-8 copyright__social module"
                style={{
                  boxSizing: "border-box",
                  position: "relative",
                  width: "100%",
                  paddingRight: "15px",
                  paddingLeft: "15px",
                  visibility: "hidden"
                }}
              >
                <a
                  target="_blank"
                  href="https://www.facebook.com/"
                  style={{
                    boxSizing: "border-box",
                    textDecoration: "none",
                    backgroundColor: "transparent",
                    display: "inline-block",
                    color: "rgba(1,1,1,.73)",
                    WebkitTransition: "color .3s ease-in-out",
                    MozTransition: "color .3s ease-in-out",
                    OTransition: "color .3s ease-in-out",
                    transition: "color .3s ease-in-out",
                    marginBottom: 0,
                    fontSize: "16px",
                    lineHeight: "50px",
                    fontWeight: 400,
                    marginRight: "15px"
                  }}
                >
                  Facebook
                </a>
                <a
                  target="_blank"
                  href="https://www.instagram.com/"
                  style={{
                    boxSizing: "border-box",
                    textDecoration: "none",
                    backgroundColor: "transparent",
                    display: "inline-block",
                    color: "rgba(1,1,1,.73)",
                    WebkitTransition: "color .3s ease-in-out",
                    MozTransition: "color .3s ease-in-out",
                    OTransition: "color .3s ease-in-out",
                    transition: "color .3s ease-in-out",
                    marginBottom: 0,
                    fontSize: "16px",
                    lineHeight: "50px",
                    fontWeight: 400,
                    marginRight: "15px"
                  }}
                >
                  Instagram
                </a>
                <a
                  target="_blank"
                  href="https://twitter.com/"
                  style={{
                    boxSizing: "border-box",
                    textDecoration: "none",
                    backgroundColor: "transparent",
                    display: "inline-block",
                    color: "rgba(1,1,1,.73)",
                    WebkitTransition: "color .3s ease-in-out",
                    MozTransition: "color .3s ease-in-out",
                    OTransition: "color .3s ease-in-out",
                    transition: "color .3s ease-in-out",
                    marginBottom: 0,
                    fontSize: "16px",
                    lineHeight: "50px",
                    fontWeight: 400
                  }}
                >
                  Twitter
                </a>
              </div>
              <div
                className="col-lg-2 col-md-6 col-sm-4 module"
                style={{
                  boxSizing: "border-box",
                  position: "relative",
                  width: "100%",
                  paddingRight: "15px",
                  paddingLeft: "15px",
                  visibility: "hidden"
                }}
              >
                <a
                  className="copyright__to-top"
                  href="#"
                  style={{
                    boxSizing: "border-box",
                    textDecoration: "none",
                    backgroundColor: "transparent",
                    color: "rgba(1,1,1,.73)",
                    WebkitTransition: "color .3s ease-in-out",
                    MozTransition: "color .3s ease-in-out",
                    OTransition: "color .3s ease-in-out",
                    transition: "color .3s ease-in-out",
                    marginBottom: 0,
                    fontSize: "16px",
                    lineHeight: "50px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-end",
                    whiteSpace: "nowrap",
                    fontWeight: 500
                  }}
                >
                  Go to top
                  <GotoTop></GotoTop>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
