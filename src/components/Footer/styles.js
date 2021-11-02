import styled from "styled-components";
import { MEDIA } from "../../styles/consts";

export const FooterContainer = styled.div`

margin-top: 50px;

background-image: linear-gradient(#67C3F3, #5A98F2);
height: 70px;

display: flex;
justify-content: center;
align-items: center;


${MEDIA.LARGE_SCREEN} {
    margin-top: 0;
}


`

export const ContentFooter = styled.p`

font-size: 22px;
color: white;
`