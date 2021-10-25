import React, { useState } from "react";
import { DivDescription } from "./styles";
import { InputData } from "./styles";
import { TextDescription } from "./styles"
import { UnitSpan } from "./styles";



function InputElement(props) {

    const [heightValue, setHeightValue] = useState("");
    const [weightValue, setWeightValue] = useState("");
    const [AgeValue, setAgeValue] = useState("");

    const InputName = props.name
    function setValues() {

        if( InputName === "Altura") {
            setHeightValue()
            console.log("Altura")

        } else if (InputName === "Peso"){
            setWeightValue()
            console.log("Peso")

        } else if (InputName === "Idade"){
            setAgeValue()
            console.log("Idade")
        }
    }
    


    return(
        <DivDescription>
            <TextDescription>{props.text}</TextDescription>
        <InputData onChange={setValues}/>
        <UnitSpan>{props.spanText}</UnitSpan>
        </DivDescription>
        
    )
}

export default InputElement