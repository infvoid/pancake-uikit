import React from "react";
import styled from "styled-components";
import Heading from "../../components/Heading/Heading";
import { ModalBody, ModalHeader, ModalTitleCenter, ModalContainer, ModalCloseButton, ModalBackButton } from "./styles";
import { ModalProps } from "./types";

const ModalCloseButtonStyle = styled.div`
  position: absolute;
  right: -10px;
  top: -9px;
`

const Modal: React.FC<ModalProps> = ({
  title,
  onDismiss,
  onBack,
  children,
  hideCloseButton = false,
  bodyPadding = "24px",
  headerBackground = "transparent",
  minWidth = "320px",
  ...props
}) => (
  <ModalContainer minWidth={minWidth} {...props}>
    <ModalHeader background={headerBackground}>
      <ModalTitleCenter>
        {onBack && <ModalBackButton onBack={onBack} />}
        <Heading mt="16px">{title}</Heading>
      </ModalTitleCenter>
      {!hideCloseButton && <ModalCloseButtonStyle><ModalCloseButton onDismiss={onDismiss} /></ModalCloseButtonStyle>}
    </ModalHeader>
    <ModalBody p={bodyPadding}>{children}</ModalBody>
  </ModalContainer>
);

export default Modal;
