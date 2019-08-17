import React from "react";

class Arrow extends React.Component {
  render() {
    return (
            <li className="arrow col-xl-6 col-lg-12 col-md-6 col-sm-6">
            <div className="arrow"><img className="arrow_img" src="arrow.svg" alt="arrow" /><span>{this.props.text}</span></div>
            </li>
    )}}

class About extends React.Component {
  render() {
    return (
      <div className="showcase_about_bg">
        <div className="img60-left">
            <img className="showcase" alt="showcase_lady_nature" src="/showcase.png" />
            <img className="showcase2" alt="greyed out nature background" src="grey2.png" />
        </div>
        <div
          id="showcase"
          className="showcase_block"
        >
          <h3 className="block__subtitle module">
            Enhance your well-being with the benefits of naturally sourced
            alkalizing Trace Minerals.
          </h3>
          <ul className="row module">
            <Arrow text="Plant Based"/>
            <Arrow text="Low in Sodium"/>
	    <Arrow text="Handmade in USA"/>
	    <Arrow text="No Calories"/>
	    <Arrow text="Vegan"/>
	    <Arrow text="No Preservatives"/>
	    <Arrow text="No Pesticides"/>
	    <Arrow text="No Synthetic Ingredients"/>
	    <Arrow text="GMP certified"/>

	    <Arrow text="Extracted from virgin plants"/>
          </ul>
          <a href="#" className="load__more module">
            <img src="arrow.svg" alt="arrow" />
            <span>View All Specifications</span>
          </a>
        </div>

            <div className="row">
            <div className="col-lg-6 module">
            <p>
            Ajtene's formula is a unique composition of naturally occurring
                Alkaline and Trace Minerals that enhance body's vital functions and development.
            </p>
            </div>
            <div className="col-lg-6 module">
            <p>Collected by hand, selected from the depths of wild nature.</p>
            </div>

        </div>
      </div>
    );
  }
}

export default About;
