import React from 'react';
import styled, { css } from 'styled-components';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  color?: 'gray' | 'pink';
  marginTop?: number;
  size?: 'large' | 'small';
  fullWidth?: boolean;
};

const StyledButton = styled.button<ButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;
  cursor: pointer;
  border-radius: 4px;
  font-weight: bold;
  &:hover {
    opacity: 0.7;
  }

  //color
  color: white;
  ${(props) => {
    const color = props.color;
    // default color
    if (color === 'pink') {
      return css`
        background-color: #fa5252;
      `;
    }
    if (color === 'gray') {
      return css`
        background-color: #868e96;
      `;
    }
  }}

  // size
  ${(props) => {
    // smaill is default
    if (props.size === 'small') {
      return css`
        height: 2rem;
        font-size: 1rem;
      `;
    }
    if (props.size === 'large') {
      return css`
        height: 3rem;
        font-size: 1.2rem;
      `;
    }
  }}

  ${(props) =>
    props.fullWidth &&
    css`
      width: 100%;
    `}

  & + & {
    margin-top: 16px;
  }
`;

function Button({
  children,
  size = 'small',
  color = 'pink',
  ...props
}: ButtonProps) {
  return (
    <StyledButton size={size} color={color} {...props}>
      {children}
    </StyledButton>
  );
}

export default Button;
