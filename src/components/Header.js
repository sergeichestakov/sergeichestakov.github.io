import React from "react";

import Footer from "./Footer";
import profile from "../assets/images/sergeichestakov.jpg";

export default class Header extends React.Component {
  render() {
    return (
      <header id="header">
        <div className="inner">
          <a href="#one" className="image avatar">
            <img src={profile} alt="Profile" />
          </a>
          <div>
            <h1>Hi I'm Sergei</h1>
            <div>Software Engineer & Creator</div>
          </div>
        </div>
        <Footer />
      </header>
    );
  }
}
