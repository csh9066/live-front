import React from 'react';
import styled, { css } from 'styled-components';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  color?: string;
  marginTop?: number;
};

const StyledButton = styled.button<ButtonProps>`
  width: 100%;
  height: 52px;
  cursor: pointer;
  background-color: #fa5252;
  color: white;
  border-radius: 4px;
  font-weight: bold;
  &:hover {
    opacity: 0.7;
  }

  ${(props) =>
    props.color &&
    css`
      background-color: ${props.color};
    `}

  ${(props) =>
    props.marginTop &&
    css`
      margin-top: ${props.marginTop}px;
    `}  
  & + & {
    margin-top: 16px;
  }
`;

function Button({ children, ...props }: ButtonProps) {
  return <StyledButton {...props}>{children}</StyledButton>;
}

export default Button;
