import React, { useRef, useState } from "react";
import { TooltipWrapper, TooptipTarget } from "./styles";

function ToolTip() {

    const [isHovered, setIsHovered] = useState(false);
    const [isFocused, setIsFocused] = useState(false);
    const targetReg = useRef(null);
    const showTooltip = true;

    return(
        <TooltipWrapper>
        <TooptipTarget></TooptipTarget>
        </TooltipWrapper>
    )
        
        
}

export default ToolTip