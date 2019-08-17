import React from "react";
import Logo from "./Logo";

class Header2 extends React.Component {
  render() {
    return (
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
        <nav
          className="navbar navbar-expand-md"
          style={{
            boxSizing: "border-box",
            position: "relative",
            display: "flex",
            msFlexWrap: "wrap",
            flexWrap: "wrap",
            msFlexAlign: "center",
            alignItems: "center",
            msFlexPack: "justify",
            justifyContent: "space-between",
            padding: "35px 0",
            WebkitTransition: "all .3s ease-in-out",
            MozTransition: "all .3s ease-in-out",
            OTransition: "all .3s ease-in-out",
            transition: "all .3s ease-in-out"
          }}
        >
          <div
            className="come-in"
            style={{
              boxSizing: "border-box",
              opacity: 0,
              WebkitTransform: "translateY(-30px)",
              MozTransform: "translateY(-30px)",
              msTransform: "translateY(-30px)",
              OTransform: "translateY(-30px)",
              transform: "translateY(-30px)",
              willChange: "trasnform",
              animation: "come-in .8s ease-in-out forwards",
              WebkitAnimation: "come-in .8s ease-in-out forwards",
              animationDuration: ".6s"
            }}
          >
            <a
              href="/nt41"
              className="logo"
              style={{
                boxSizing: "border-box",
                textDecoration: "none",
                backgroundColor: "transparent",
                display: "inline-block",
                color: "#000"
              }}
            >
              <Logo />
            </a>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            style={{
              boxSizing: "border-box",
              margin: 0,
              fontFamily: "inherit",
              overflow: "visible",
              textTransform: "none",
              WebkitAppearance: "button",
              fontSize: "1.25rem",
              lineHeight: 1,
              backgroundColor: "transparent",
              border: "1px solid transparent",
              borderRadius: ".25rem",
              cursor: "pointer",
              padding: 0,
              zIndex: 9
            }}
          >
            <span
              className="navbar-toggler-icon"
              style={{
                boxSizing: "border-box",
                display: "inline-block",
                width: "1.5em",
                height: "1.5em",
                verticalAlign: "middle",
                background: "no-repeat center center",
                backgroundSize: "100% 100%"
              }}
            >
              <span
                style={{
                  boxSizing: "border-box"
                }}
              />
              <span
                style={{
                  boxSizing: "border-box"
                }}
              />
              <span
                style={{
                  boxSizing: "border-box"
                }}
              />
              <span
                style={{
                  boxSizing: "border-box"
                }}
              />
            </span>
          </button>
          <div
            className="navbar-collapse"
            style={{
              boxSizing: "border-box",
              msFlexPreferredSize: "100%",
              flexBasis: "100%",
              msFlexPositive: 1,
              flexGrow: 1,
              msFlexAlign: "center",
              alignItems: "center",
              justifyContent: "flex-end"
            }}
          >
            <ul
              className="navbar-nav come-in"
              style={{
                boxSizing: "border-box",
                marginTop: 0,
                display: "flex",
                msFlexDirection: "column",
                flexDirection: "column",
                paddingLeft: 0,
                marginBottom: 0,
                listStyle: "none",
                WebkitTransform: "translateY(-30px)",
                MozTransform: "translateY(-30px)",
                msTransform: "translateY(-30px)",
                OTransform: "translateY(-30px)",
                transform: "translateY(-30px)",
                willChange: "trasnform",
                animation: "come-in .8s ease-in-out forwards",
                WebkitAnimation: "come-in .8s ease-in-out forwards",
                position: "relative",
                animationDuration: ".6s",
                opacity: 1
              }}
            >
              <li
                id="menu-item-7"
                className="menu-item menu-item-type-custom menu-item-object-custom menu-item-7"
                style={{
                  boxSizing: "border-box"
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
                    fontSize: "22px",
                    lineHeight: "80px",
                    whiteSpace: "pre",
                    color: "#000",
                    WebkitTransition: "all .3s ease-in-out",
                    MozTransition: "all .3s ease-in-out",
                    OTransition: "all .3s ease-in-out",
                    transition: "all .3s ease-in-out",
                    padding: "0 15px",
                    paddingLeft: "30px",
                    paddingRight: "30px"
                  }}
                >
                  Home
                </a>
              </li>
              <li
                id="menu-item-8"
                className="menu-item menu-item-type-custom menu-item-object-custom menu-item-8"
                style={{
                  boxSizing: "border-box"
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
                    fontSize: "22px",
                    lineHeight: "80px",
                    whiteSpace: "pre",
                    color: "#000",
                    WebkitTransition: "all .3s ease-in-out",
                    MozTransition: "all .3s ease-in-out",
                    OTransition: "all .3s ease-in-out",
                    transition: "all .3s ease-in-out",
                    padding: "0 15px",
                    paddingLeft: "30px",
                    paddingRight: "30px"
                  }}
                >
                  Showcase
                </a>
              </li>
              <li
                id="menu-item-9"
                className="menu-item menu-item-type-custom menu-item-object-custom menu-item-9"
                style={{
                  boxSizing: "border-box"
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
                    fontSize: "22px",
                    lineHeight: "80px",
                    whiteSpace: "pre",
                    color: "#000",
                    WebkitTransition: "all .3s ease-in-out",
                    MozTransition: "all .3s ease-in-out",
                    OTransition: "all .3s ease-in-out",
                    transition: "all .3s ease-in-out",
                    padding: "0 15px",
                    paddingLeft: "30px",
                    paddingRight: "30px"
                  }}
                >
                  About
                </a>
              </li>
              <li
                id="menu-item-10"
                className="menu-item menu-item-type-custom menu-item-object-custom menu-item-10"
                style={{
                  boxSizing: "border-box"
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
                    fontSize: "22px",
                    lineHeight: "80px",
                    whiteSpace: "pre",
                    color: "#000",
                    WebkitTransition: "all .3s ease-in-out",
                    MozTransition: "all .3s ease-in-out",
                    OTransition: "all .3s ease-in-out",
                    transition: "all .3s ease-in-out",
                    padding: "0 15px",
                    paddingLeft: "30px",
                    paddingRight: 0
                  }}
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header2;
