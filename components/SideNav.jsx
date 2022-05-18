import React, { Component } from "react";

export class SideNav extends Component {
  

  
  render() {
    const step = this.props.step
    return (
      <div className="sidenav col-2">
        <p id="side-p0">Personlig information</p>
        <p id="side-p1">Boende</p>
        <p id="side-p2">Gäster</p>
        <p id="side-p3">Längd</p>
        <p id="side-p4">Skicka</p>
      </div>
    );
  }
}

export default SideNav;
