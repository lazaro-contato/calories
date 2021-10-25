import React from "react";

import GlobalStyle, { DataContainer, DivPageFlex, FooterDiv, HeaderMainDiv } from '../styles/global'
import Header from "./Header/index.jsx";
import MainContainer from "./MainContainer";
import Footer from "./Footer";
import Poput from "./Poput";

function App() {
    return(
        <div>
        <Poput></Poput>
            <GlobalStyle />
            <DivPageFlex>
                <HeaderMainDiv>
                    <Header />
                </HeaderMainDiv>  
                <DataContainer>
                    <MainContainer />
                </DataContainer>
                <FooterDiv>
                    <Footer />
                </FooterDiv>
            </DivPageFlex>
        </div>
        
    )
};

export default App;