import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

interface IconProps extends SvgProps {
  isDark?: boolean;
}

const Icon: React.FC<IconProps> = ({ isDark, ...props }) => {
  const textColor = isDark ? "#A28BD4" : "#000000";
  return (
    <Svg viewBox="0 0 28 28" {...props}>
      <path fill="none" stroke={textColor} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" d="M18,3.445H0L4.765,0" transform="translate(5 6.16)" />
      <path fill="none" stroke={textColor} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" d="M18,3.445H0L4.765,0" transform="translate(23 22.445) rotate(180)" />
    </Svg>
  );
};

export default React.memo(Icon, (prev, next) => prev.isDark === next.isDark);
