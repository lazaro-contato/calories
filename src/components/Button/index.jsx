import React from "react";
import { ButtonCont } from "./styles";

function Button(props) {

    return(
        <ButtonCont type={props.type}>{props.text}</ButtonCont>
    )
}

export default Button;