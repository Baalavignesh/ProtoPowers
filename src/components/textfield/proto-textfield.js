import React from "react";
import "./proto-textfield.css";

function ProtoField(props) {
  return (
    <div className="field-container">
      <input
        className="proto-field"
        placeholder=" "
        type={props.type}
        name={props.name}
        onChange={props.onchange}
      ></input>

      <span className="proto-field-float">{props.placeholder}</span>
    </div>
  );
}

export default ProtoField;
