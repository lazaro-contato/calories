import React from "react";

import GlobalStyle, { DataContainer, DivPageFlex } from '../styles/global'
import Header from "./Header/index.jsx";
import MainContainer from "./MainContainer";
import { HeaderDiv } from "../components/Header/styles";
import Footer from "./Footer";

function App() {
    return(
        <div>
            <GlobalStyle />
            <DivPageFlex>
                <HeaderDiv>
                    <Header />
                </HeaderDiv>
                <DataContainer>
                    <MainContainer />
                </DataContainer>
                <Footer></Footer>
            </DivPageFlex>
            
        </div>
        
    )
};

export default App;