import React from 'react';
import styled from 'styled-components';

type ErrorMessageProps = {
  children?: React.ReactNode;
};

const StyledErorMessage = styled.div`
  margin-top: 6px;
  margin-bottom: 16px;
  color: #f32624;
  font-size: 12px;
`;

function ErrorMessage({ children }: ErrorMessageProps) {
  return <StyledErorMessage>{children}</StyledErorMessage>;
}

export default ErrorMessage;
