import React from 'react';
import styled from 'styled-components';

type SoicalLoginProps = {};

const StyledSoicalLogin = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  img {
    width: 300px;
  }
`;

function SoicalLogin(props: SoicalLoginProps) {
  return (
    <StyledSoicalLogin>
      <a href="http://localhost:3005/auth/facebook">
        <img
          src="https://scontent-ssn1-1.xx.fbcdn.net/v/t39.2365-6/17639236_1785253958471956_282550797298827264_n.png?_nc_cat=105&ccb=2&_nc_sid=ad8a9d&_nc_ohc=d2nag00iJqMAX-A2aFl&_nc_ht=scontent-ssn1-1.xx&oh=d5520a0408b635b9dc293bea96064d24&oe=5FC05516"
          alt="페이스북 로그인"
        />
      </a>
    </StyledSoicalLogin>
  );
}

export default SoicalLogin;
