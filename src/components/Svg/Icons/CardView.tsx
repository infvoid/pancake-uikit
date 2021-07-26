import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 18 18" {...props}>
      <g stroke="none" strokeWidth="1" fill="currentColor" fillRule="evenodd">
        <rect fill="currentColor" x="0" y="0" width="8" height="8" rx="1"></rect>
        <rect fill="currentColor" x="0" y="10" width="8" height="8" rx="1"></rect>
        <rect fill="currentColor" x="10" y="0" width="8" height="8" rx="1"></rect>
        <rect fill="currentColor" x="10" y="10" width="8" height="8" rx="1"></rect>
      </g>
    </Svg>
  );
};

export default Icon;
