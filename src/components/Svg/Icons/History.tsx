import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <polyline stroke="currentColor" points="10 5 10 10.8333333 15 14.1666667"></polyline>
        <g transform="translate(9.000000, 10.000000) rotate(-90.000000) translate(-9.000000, -10.000000) translate(-0.500000, -0.500000)"
          stroke="#000000" strokeLinecap="round" strokeLinejoin="round">
          <polyline stroke="currentColor" points="7.91992271 4.5 9.5 2.2174486 7.5 0.5"></polyline>
          <path
            d="M12.6542183,3.06719487 C16.0691563,4.3452885 18.5,7.63850248 18.5,11.4989113 C18.5,16.4708479 14.470003,20.5 9.5005443,20.5 C4.52890838,20.5 0.5,16.4708479 0.5,11.4989113 C0.5,6.52915205 4.52890838,2.5 9.5005443,2.5"
            stroke="currentColor"></path>
        </g>
      </g>
    </Svg>
  );
};

export default Icon;
