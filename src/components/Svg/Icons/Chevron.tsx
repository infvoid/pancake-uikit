import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
    return (
        <Svg viewBox="0 0 48 48" {...props}>
            <defs>
                <rect id="path-1" x="0" y="0" width="48" height="48" rx="6"></rect>
                <filter x="-15.6%" y="-15.6%" width="143.8%" height="143.8%" filterUnits="objectBoundingBox">
                    <feOffset dx="3" dy="3" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
                    <feGaussianBlur stdDeviation="3" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
                    <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.2 0" type="matrix" in="shadowBlurOuter1">
                    </feColorMatrix>
                </filter>
            </defs>
            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g>
                    <use fill="black" fillOpacity="1" filter="url(#filter-2)" xlinkHref="#path-1"></use>
                    <use fill="#FFFFFF" fillRule="evenodd" xlinkHref="#path-1"></use>
                </g>
                <polyline stroke="#010033" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
                    points="13 20 24 31 35 20"></polyline>
            </g>
        </Svg>
    );
};

export default Icon;