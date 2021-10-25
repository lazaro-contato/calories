import React from "react";
import { ContainerText, InfoDiv, TextContent } from "./styles";
import InterrogationIcon from "../InterrogationIcon/index"

function InfoCalories(props) {
    return(
        <InfoDiv>
            <ContainerText>
                <TextContent>{props.textContent}</TextContent>
                <InterrogationIcon></InterrogationIcon>
            </ContainerText>
        </InfoDiv>
    )
}

export default InfoCalories;