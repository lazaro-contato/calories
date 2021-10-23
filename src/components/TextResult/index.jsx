import React from "react";
import { DivContent, Result, Unit } from "./styles";

function TextResult(props) {
    return (
        <DivContent>
    <Result>{props.result}</Result>
    <Unit>{props.unit}</Unit>
    </DivContent>
    )
}

export default TextResult;