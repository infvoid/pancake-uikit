export type Breakpoints = string[];

export type MediaQueries = {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  nav: string;
};

export type Spacing = number[];

export type Radii = {
  small: string;
  default: string;
  card: string;
  circle: string;
};

export type Shadows = {
  level1: string;
  active: string;
  success: string;
  warning: string;
  focus: string;
  focus2: string;
  focus3: string;
  inset: string;
};

export type Gradients = {
  bubblegum: string;
  bubblegum2: string;
  cardHeader: string;
  cardHeader2: string;
  blue: string;
  violet: string;
  violetAlt: string;
  gold: string;
};

export type Colors = {
  primary: string;
  scroll: string;
  primaryBright: string;
  primaryDark: string;
  secondary: string;
  tertiary: string;
  success: string;
  failure: string;
  warning: string;
  contrast: string;
  dropdown: string;
  invertedContrast: string;
  input: string;
  input2: string;
  inputSecondary: string;
  background: string;
  backgroundDisabled: string;
  backgroundAlt: string;
  text: string;
  textDisabled: string;
  textSubtle: string;
  textSubtle2: string;
  borderColor: string;
  cardBorder:string;
  disabled:string;
  overlay:string;
  // Gradients
  gradients: Gradients;

  // Brand colors
  binance: string;
};

export type ZIndices = {
  dropdown: number;
  modal: number;
};
