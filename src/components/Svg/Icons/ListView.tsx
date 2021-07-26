import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 20 18" {...props}>
      <g stroke="none" strokeWidth="1" fill="currentColor" fillRule="evenodd">
        <rect fill="currentColor" x="0" y="0" width="4" height="4"></rect>
        <rect fill="currentColor" x="6" y="0" width="14" height="4"></rect>
        <rect fill="currentColor" x="0" y="7" width="4" height="4"></rect>
        <rect fill="currentColor" x="6" y="7" width="14" height="4"></rect>
        <rect fill="currentColor" x="0" y="14" width="4" height="4"></rect>
        <rect fill="currentColor" x="6" y="14" width="14" height="4"></rect>
      </g>
    </Svg>
  );
};

export default Icon;
