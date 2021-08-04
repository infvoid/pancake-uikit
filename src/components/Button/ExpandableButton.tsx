import React from "react";
import styled from "styled-components";
import { ChevronDownIcon, ChevronIcon } from "../Svg";
import Button from "./Button";
import IconButton from "./IconButton";

interface Props {
  onClick?: () => void;
  expanded?: boolean;
}

const IconButtonStyle = styled(IconButton)`
  background-color: #fff;
  @media screen and (max-width: 800px) {
    width: 30px;
    height: 30px;
    border-radius: 4px;
  }
  svg {
    fill: #000;
  }
`

export const ExpandableButton: React.FC<Props> = ({ onClick, expanded, children }) => {
  return (
    <IconButtonStyle aria-label="Hide or show expandable content" onClick={onClick}>
      {children}
      {expanded ? <ChevronIcon width="32px" color="invertedContrast" /> : <ChevronDownIcon color="invertedContrast" />}
    </IconButtonStyle>
  );
};
ExpandableButton.defaultProps = {
  expanded: false,
};

export const ExpandableLabel: React.FC<Props> = ({ onClick, expanded, children }) => {
  return (
    <Button
      variant="text"
      aria-label="Hide or show expandable content"
      onClick={onClick}
      endIcon={expanded ? <ChevronIcon width="32px" color="primary" /> : <ChevronDownIcon color="primary" />}
    >
      {children}
    </Button>
  );
};
ExpandableLabel.defaultProps = {
  expanded: false,
};
