import React from "react";

import GlobalStyle, { DataContainer } from '../styles/global'
import Header from "./Header/index.jsx";
import MainContainer from "./MainContainer";
import { HeaderDiv } from "../components/Header/styles";

function App() {
    return(
        <div>
        <GlobalStyle />
        <HeaderDiv>
            <Header />
        </HeaderDiv>
        <DataContainer>
            <MainContainer />
        </DataContainer>
        
        </div>
        
    )
};

export default App;