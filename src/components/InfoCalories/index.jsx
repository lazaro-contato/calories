import React from "react";
import TextResult from "../TextResult";
import { InfoDiv, TextContent } from "./styles";

function InfoCalories(props) {
    return(
        <InfoDiv>
        <TextContent>{props.textContent}</TextContent>
        <TextResult result="1758.57" unit={props.unit}/>
        </InfoDiv>
    )
}

export default InfoCalories;