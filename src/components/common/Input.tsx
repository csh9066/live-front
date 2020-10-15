import React from 'react';
import styled from 'styled-components';

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {};

const StyledInput = styled.input`
  width: 100%;
  outline: none;
  border: solid 1px #dadada;
  height: 54px;
  padding: 0 15px;
  font-size: 12px;
  &:focus {
    border: solid 2px #fa5252;
  }

  & + & {
    margin-top: 16px;
  }
`;

const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return <StyledInput {...props} ref={ref} />;
});

export default Input;
