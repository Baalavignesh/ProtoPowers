import React from "react";

function Logo(props) {
    return (
        <div onClick={props.onclick}>
            <h2>PROTO</h2>
            <h3 style={{letterSpacing:"5px"}}>POWERS</h3>
        </div>
    )
}

export default Logo;