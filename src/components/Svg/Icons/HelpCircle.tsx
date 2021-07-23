import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
    return (
        <Svg viewBox="0 0 21 21" {...props}>
            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <circle stroke="#A5A5A5" fill="#FBFBFB" cx="11" cy="11" r="10"></circle>
                <text fontFamily="ArialMT, Arial" fontSize="14" fontWeight="normal" fill="#A5A5A5">
                    <tspan x="7" y="16">?</tspan>
                </text>
            </g>
        </Svg>
    );
};

export default Icon;
