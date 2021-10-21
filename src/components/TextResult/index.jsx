import React from "react";
import { Result, Unit } from "./styles";

function TextResult(props) {
    return (
        <>
    <Result>{props.result}</Result>
    <Unit>{props.unit}</Unit>
    </>
    )
}

export default TextResult;