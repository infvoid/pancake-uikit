import React from "react";
import { useTheme } from "styled-components";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  const theme = useTheme();

  return (
    <Svg viewBox="0 0 1080 1080" {...props}>
      <circle fill="#3b3cbd" cx="540.44" cy="524.89" r="500" />
    <path fill="#fff"
        d="M665.44,430.69Q651.6,406.14,625,393.33t-63.92-12.8H462.26v94.78a48.83,48.83,0,0,1,0,95.06V685.72h98.65q38,0,64.55-13.22t40.19-37.79q13.65-24.56,13.65-58.35V489.88Q679.3,455.26,665.44,430.69ZM627.66,578q0,28.55-17.1,44.08t-48.18,15.53h-50V428.59h50q31.07,0,48.18,15.54t17.1,44.07Z" />
    <path fill="#fff" d="M473.72,522.84a32.86,32.86,0,1,0-25.22,31.84A32.74,32.74,0,0,0,473.72,522.84Z" />
    </Svg>
  );
};

export default Icon;
