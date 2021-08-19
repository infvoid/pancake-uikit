import { Colors } from "./types";

export const baseColors = {
  // failure: "#ED4B9E",
  failure: "#2f303f",
  primary: "#7A7A7A",
  primaryBright: "#53DEE9",
  primaryDark: "#0098A1",
  // secondary: "#7645D9",
  secondary: "#ffa402",
  success: "#FDC702",
  warning: "#FFB237",
};

export const additionalColors = {
  binance: "#F0B90B",
  overlay: "#452a7a",
};

export const lightColors: Colors = {
  ...baseColors,
  ...additionalColors,
  background: "#f6f6f6",
  backgroundDisabled: "#E9EAEB",
  backgroundAlt: "#FFFFFF",
  cardBorder: "#E7E3EB",
  contrast: "#191326",
  dropdown: "#F6F6F6",
  invertedContrast: "#ffffff",
  input: "#f0f0f0",
  input2: "#f0f0f0",
  inputSecondary: "#d7caec",
  tertiary: "#EFF4F5",
  text: "#000000",
  textDisabled: "#BDC2C4",
  // textSubtle: "#303133",
  textSubtle: "#000000",
  textSubtle2: "#2d2d2d",
  scroll: "#fdc702",
  borderColor: "#E9EAEB",
  disabled: "#E9EAEB",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
    bubblegum2: "linear-gradient(139.73deg, rgb(184, 228, 306) 0%, rgb(243, 239, 233) 100%)",
    cardHeader: "linear-gradient(111.68deg, #F2ECF2 0%, #E8F2F6 100%)",
    cardHeader2: "linear-gradient(139.73deg, rgb(184,228,255) 0%, rgb(243,239,233) 100%)",
    blue: "linear-gradient(180deg, #A7E8F1 0%, #94E1F2 100%)",
    violet: "linear-gradient(180deg, #E2C9FB 0%, #CDB8FA 100%)",
    violetAlt: "linear-gradient(180deg, #CBD7EF 0%, #9A9FD0 100%)",
    gold: "linear-gradient(180deg, #FFD800 0%, #FDAB32 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...additionalColors,
  secondary: "#fdc702",
  background: "#0f0f3f",
  backgroundDisabled: "#3c3742",
  backgroundAlt: "#010033",
  cardBorder: "#E7E3EB",
  contrast: "#FFFFFF",
  dropdown: "#1E1D20",
  invertedContrast: "#010033",
  input: "#38385b",
  input2: "rgb(36,35,92)",
  inputSecondary: "#66578D",
  primaryDark: "#0098A1",
  tertiary: "#353547",
  text: "#EAE2FC",
  textDisabled: "#666171",
  textSubtle: "#ffffff",
  textSubtle2: "#ffffff",
  scroll: "#ffffff",
  borderColor: "#524B63",
  disabled: "#524B63",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
    bubblegum2: "linear-gradient(139.73deg,rgb(36,35,92) 0%,rgb(0,14,43) 100%)",
    cardHeader: "linear-gradient(166.77deg, #3B4155 0%, #3A3045 100%)",
    cardHeader2: "linear-gradient(166.77deg, #3B4155 0%, #3A3045 100%)",
    blue: "linear-gradient(180deg, #00707F 0%, #19778C 100%)",
    violet: "linear-gradient(180deg, #6C4999 0%, #6D4DB2 100%)",
    violetAlt: "linear-gradient(180deg, #434575 0%, #66578D 100%)",
    gold: "linear-gradient(180deg, #FFD800 0%, #FDAB32 100%)",
  },
};
