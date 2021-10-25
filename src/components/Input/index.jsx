import React from "react";
import { DivDescription } from "./styles";
import { InputData } from "./styles";
import { TextDescription } from "./styles"
import { UnitSpan } from "./styles";


function InputElement(props) {

    const InputName = props.name
    function namee(){
        console.log(InputName)
    }
    


    return(
        <DivDescription>
            <TextDescription>{props.text}</TextDescription>
        <InputData onChange={namee}/>
        <UnitSpan>{props.spanText}</UnitSpan>
        </DivDescription>
        
    )
}

export default InputElement