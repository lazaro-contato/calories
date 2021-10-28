import React, { useState } from "react";
import ContainerResults from "../ContainerResults";
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
                        <ContainerResults values={values}/>
                    </ElementContainer>
                </FlexContainer>
            </Container>
    )
}

export default MainContainer;