import React from "react";
import Body2 from "./Body2";
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";

class HTML extends React.Component {
  render() {
      return (
	      <div className="App">
	      <div className="App-header">
	  
              <Body2></Body2>
              <Header></Header>
              <Home></Home>
              <About></About>
              <Contact></Contact>
              <Footer></Footer>

	  </div>
	      </div>
    );
  }
}

export default HTML;
