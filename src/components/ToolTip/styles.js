import { unstable_batchedUpdates } from "react-dom";
import styled from "styled-components";

export const TooltipWrapper = styled.div`
position: relative;
display: inline-flex;
`

export const TooptipTarget = styled.button`

border: none;
background-color: none;
padding: 5px;
margin: -1px;
color: inherit;
cursor: inherit;
display: flex;

`

export const CenterContainer = styled.div`

position: absolute;
width: 200px;
margin-left: -100px;
display: flex;
justify-content: center;
align-items: center;
left: 50%;
bottom: calc(100% + 5px);
pointer-events: none;


`

export const TooltipBox = styled.span`

position: relative;
background-color: #000;
color: #fff;
text-align: center;
border-radius: 5px;
padding: 10px 8px;
font-size: 14px;
box-shadow: 0 4px rgba(0, 0, 0, 0.15), 0 4px 8px rgba(0, 0, 0, 0.2);

&after{
    content: "";
    position: absolute;
    width: 1px;
    height: 1px;
    border-width: 5px;
    border-style: solid;
    border-color: #000000 transparent transparent transparent;
    left: calc(50% - 4.5px);
    top: 100%;
}
`