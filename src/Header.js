import React, { Component } from "react";
import logo from "./u-mad.png";

class Header extends Component {
  state = {};
  render() {
    return (
      <div className="logo-cont">
        <a href="#">
          <img src={logo} alt="funny face" width="60" height="50" />{" "}
        </a>
        <h2>Meme Generator</h2>
      </div>
    );
  }
}

export default Header;
