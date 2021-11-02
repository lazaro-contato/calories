import React, { useState } from "react";
import ContainerResults from "../ContainerResults";
import FireElement from "../FireElement";
import Form from "../Form";
import { Container, ElementContainer, FlexContainer, FormContainer } from "./styles";

 

function MainContainer() {

    const [values, setValues] = useState({})

    return(
            <Container>
                <FlexContainer>
                    <FormContainer>
                        <Form setValues={setValues}/>
                    </FormContainer>
                    <ElementContainer>
                    <FireElement></FireElement>
                    </ElementContainer>
                </FlexContainer>
            </Container>
    )
}

export default MainContainer;