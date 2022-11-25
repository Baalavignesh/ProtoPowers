import React from "react";
import Logo from "../logo/logo";
import "./navbar.css";

function NavBar(props) {
  return props.isWelcome ? (
    <div className="navbar-main-welcome">
      <div className="logo-welcome">
        <Logo onclick={props.logoclick} />
      </div>
    </div>
  ) : props.isMain ? (
    <div className="navbar-main">
      <div className="logo-left" style={props.logoStyle}>
        <Logo onclick={props.logoclick} />
      </div>
      <h1 className="nav-middle-main">{props.middle}</h1>
      <div className="nav-right" onClick={props.onclick}>
        <div className="nav-right-text">{props.right}</div>
        <div className="arrow-right"> </div>
      </div>
    </div>
  ) : (
    <div className="navbar-main">
      <div className="logo-left" style={props.logoStyle}>
        <Logo onclick={props.logoclick} />
      </div>
      <h1 className="nav-middle">{props.middle}</h1>
      <div className="nav-right" onClick={props.onclick}>
        <div className="nav-right-text">{props.right}</div>
      </div>
    </div>
  );
}
export default NavBar;
