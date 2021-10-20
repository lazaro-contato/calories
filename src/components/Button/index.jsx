import React from "react";
import { ButtonCont } from "./styles";

function Button(props) {
    return(
        <ButtonCont>{props.text}</ButtonCont>
    )
}

export default Button;