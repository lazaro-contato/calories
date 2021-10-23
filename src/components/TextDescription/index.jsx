import React from "react";
import { Description, DescriptionDiv } from "./styles";

function TextDescription(props) {

    return(
        <DescriptionDiv>
            <Description>{props.text}</Description>
        </DescriptionDiv>
              
    )
}

export default TextDescription;