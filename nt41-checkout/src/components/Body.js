import React from "react";
import Body2 from "./Body2";
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";

class Body extends React.Component {
  render() {
    return (
      <div>
        <Body2></Body2>
        <Header></Header>
        <Home></Home>
        <About></About>
        <Contact></Contact>
        <Footer></Footer>
      </div>
    );
  }
}

export default Body;
