import React from "react";
import { ButtonCont } from "./styles";

function Button(props) {

    function test(){
        console.log("casa")
    }

    return(
        <ButtonCont onClick={test}>{props.text}</ButtonCont>
    )
}

export default Button;