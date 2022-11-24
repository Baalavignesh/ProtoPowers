import { display } from "@mui/system";
import React from "react";

function GoogleButton() {
  return (
    <div>
      <img src={require("./google_logo.png")} alt="google signup"
      style={{width:"200px"}}
      ></img>
    </div>
  );
}

export default GoogleButton;
