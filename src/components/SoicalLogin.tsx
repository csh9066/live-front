import React from 'react';
import styled, { css } from 'styled-components';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebookF } from 'react-icons/fa';
import { Link } from 'react-router-dom';

type SoicalLoginProps = {};

const StyledSoicalLogin = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  max-width: 430px;
  padding: 0 12px 60px 12px;
  box-shadow: 0px 10px 20px 5px #ccc;
  .logo {
    text-align: center;
    img {
      width: 150px;
    }
  }
  .desc {
    font-weight: bold;
    text-align: center;
  }
  img {
    width: 300px;
  }

  .social-buttons {
    margin-top: 30px;
  }
`;

const SocialButton = styled.div<{ type: 'google' | 'facebook' }>`
  height: 52px;
  cursor: pointer;
  border-radius: 2rem;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  display: flex;
  align-items: center;
  padding: 12px;

  .icon {
    width: 24px;
    height: 24px;
    margin-right: 24px;
  }
  .text {
    font-weight: 500;
    font-size: 1.2rem;
  }
  & + & {
    margin-top: 16px;
  }

  ${(props) => {
    if (props.type === 'google') {
      return css`
        background-color: #eee;
        .text {
          color: #333;
        }
      `;
    }
    if (props.type === 'facebook') {
      return css`
        background-color: #5285c6;
        .icon,
        .text {
          color: white;
        }
      `;
    }
  }};
`;

function SoicalLogin(props: SoicalLoginProps) {
  return (
    <StyledSoicalLogin>
      <Wrapper>
        <div className="logo">
          <img src={`${process.env.PUBLIC_URL}/live.png`} alt="라이브 로고" />
        </div>
        <div className="desc">
          <p> 환영합니다!</p>
          <p>
            현재는 소셜 로그인만 지원하고 있습니다. <br />
            테스트 아이디를 사용하실려면{' '}
            <Link to="/auth/test" style={{ textDecoration: 'underline' }}>
              여기
            </Link>
            를 클릭해주세요
          </p>
        </div>
        <div className="social-buttons">
          <SocialButton type="facebook">
            <FaFacebookF className="icon" />
            <a
              href={`${process.env.REACT_APP_SERVER_URL}/auth/facebook`}
              className="text"
            >
              Facebook로 로그인 하기
            </a>
          </SocialButton>
          <SocialButton type="google">
            <FcGoogle className="icon" />
            <span className="text">
              <a
                href={`${process.env.REACT_APP_SERVER_URL}/auth/google`}
                className="text"
              >
                Google로 로그인 하기
              </a>
            </span>
          </SocialButton>
        </div>
      </Wrapper>
    </StyledSoicalLogin>
  );
}

export default SoicalLogin;
