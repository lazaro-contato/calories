import React from "react";
import { ContainerText, InfoDiv, TextContent } from "./styles";
import InterrogationIcon from "../InterrogationIcon/index"

function InfoCalories(props) {
    return(
        <InfoDiv>
            <ContainerText>
                <TextContent>{props.textContent}</TextContent>
                <InterrogationIcon text={props.tippy}/>
            </ContainerText>
        </InfoDiv>
    )
}

export default InfoCalories;