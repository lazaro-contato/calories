import React from "react";
import { InfoDiv, TextContent } from "./styles";

function InfoCalories(props) {
    return(
        <InfoDiv>
        <TextContent>{props.textContent}</TextContent>
        </InfoDiv>
    )
}

export default InfoCalories;