import { InputHTMLAttributes } from "react";
import styled from "styled-components";
import Text from "../Text/Text";
// import bunnyHeadMain from "./svg/bunnyhead-main1.svg";
// import bunnyHeadMax from "./svg/bunnyhead-max1.svg";
import bunnyButt from "./svg/bunnybutt.svg";

interface SliderLabelProps {
  progress: string;
}

interface StyledInputProps extends InputHTMLAttributes<HTMLInputElement> {
  isMax: boolean;
}

interface DisabledProp {
  disabled?: boolean;
}

const getCursorStyle = ({ disabled = false }: DisabledProp) => {
  return disabled ? "not-allowed" : "cursor";
};

const getBaseThumbStyles = ({ isMax, disabled }: StyledInputProps) => `
  -webkit-appearance: none;
  background-image: url(${!isMax ? "/images/bunnyhead-main.svg" : "/images/bunnyhead-max.svg"});
  cursor: ${getCursorStyle};
  width: 24px;
  height: 32px;
  filter: ${disabled ? "grayscale(100%)" : "none"};
  transform: translate(-2px, -2px);
  transition: 200ms transform;

  &:hover {
    transform: ${disabled ? "scale(1) translate(-2px, -2px)" : "scale(1.1) translate(-3px, -3px)"};
  }
`;

export const SliderLabelContainer = styled.div`
  bottom: 0;
  position: absolute;
  left: 14px;
  width: calc(100% - 30px);
`;

export const SliderLabel = styled(Text)<SliderLabelProps>`
  bottom: 0;
  font-size: 12px;
  left: ${({ progress }) => progress};
  position: absolute;
  text-align: center;
  min-width: 24px; // Slider thumb size
`;

export const BunnyButt = styled.div<DisabledProp>`
  /* background: url(${bunnyButt}) no-repeat; */
  height: 32px;
  filter: ${({ disabled }) => (disabled ? "grayscale(100%)" : "none")};
  position: absolute;
  width: 15px;
`;

export const BunnySlider = styled.div`
  position: absolute;
  left: 14px;
  width: calc(100% - 14px);
`;

export const StyledInput = styled.input<StyledInputProps>`
  cursor: ${getCursorStyle};
  height: 32px;
  position: relative;

  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    ${getBaseThumbStyles}
  }

  ::-moz-range-thumb {
    ${getBaseThumbStyles}

    background-color: transparent;
    border: 0;
  }

  ::-ms-thumb {
    ${getBaseThumbStyles}
  }
`;

export const BarBackground = styled.div<DisabledProp>`
  background-color: ${({ theme, disabled }) => disabled ?theme.colors[ "textDisabled"]:"rgb(173,173,173)"};
  height: 15px;
  position: absolute;
  top: 18px;
  width: 90%;
  left: 10px;
  border-radius:15px;
`;

export const BarProgress = styled.div<DisabledProp>`
  background-color: transparent;
  filter: ${({ disabled }) => (disabled ? "grayscale(100%)" : "none")};
  background: linear-gradient(to right, rgb(255, 242,0), rgb(254, 163, 0) 100%);
  border-radius: 10px;
  height: 15px;
  position: absolute;
  top: 18px;
`;
