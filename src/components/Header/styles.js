import styled from "styled-components";
import { Colors } from '../../styles/consts'
import { MEDIA } from "../../styles/consts"


export const Container = styled.div`

    height: 100px;
    width: 80%;


    display: flex;
    justify-content: space-between;
    align-items: center;
    

    background: ${Colors.PRIMARY_BACKGROUND};
    color: ${Colors.PRIMARY_BACKGROUND};
    

    ${MEDIA.MEDIUM_SCREEN} {
 
}


`

export const DivLink = styled.div`
    display: flex;
    align-items: center;

    background: ${Colors.PRIMARY_BACKGROUND};

`