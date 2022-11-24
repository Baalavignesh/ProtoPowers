import React from "react";
import "./proto-button.css";

function ProtoButton(props) {
  return (
    <div className="proto-button" onClick={props.onclick} style={props.style}>
      {props.name}
    </div>
  );
}

export default ProtoButton;
