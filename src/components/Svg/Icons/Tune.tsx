import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g stroke="#000000">
          <line x1="0" y1="2.91210938" x2="20" y2="2.91210938" id="Path-16" strokeLinecap="round" stroke="currentColor"></line>
          <line x1="0" y1="10" x2="20" y2="10" id="Path-16-Copy" strokeLinecap="round" stroke="currentColor"></line>
          <line x1="0" y1="17" x2="20" y2="17" id="Path-16-Copy-2" strokeLinecap="round" stroke="currentColor"></line>
          <circle fill="#FFFFFF" cx="5.5" cy="2.5" r="2.5"></circle>
          <circle fill="#FFFFFF" cx="14.5" cy="9.5" r="2.5"></circle>
          <circle fill="#FFFFFF" cx="4.5" cy="17.5" r="2.5"></circle>
        </g>
      </g>
    </Svg>
  );
};

export default Icon;
