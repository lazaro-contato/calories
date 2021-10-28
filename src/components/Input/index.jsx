import React from "react";
import { DivDescription } from "./styles";
import { InputData } from "./styles";
import { TextDescription } from "./styles"
import { UnitSpan } from "./styles";


function InputElement(props) {
    return(
        <DivDescription>
            <TextDescription>{props.text}</TextDescription> 
        <InputData name={props.name} type={props.type} />
       <UnitSpan>{props.spanText}</UnitSpan>
        </DivDescription>
        
    )

}

export default InputElement