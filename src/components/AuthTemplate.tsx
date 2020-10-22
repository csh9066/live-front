import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

type AuthTemplateProps = {
  mode: 'login' | 'register';
  children: React.ReactNode;
  // onChangeForm: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Wrapper = styled.div`
  margin: 50px auto 50px auto;
  max-width: 376px;
  h1 {
    text-align: center;
    margin-bottom: 30px;
    .logo {
      width: 75px;
    }
  }
`;

const SocialDvide = styled.div`
  position: relative;
  margin-top: 60px;
  border-bottom: 1px solid #ddd;
  span {
    position: absolute;
    background-color: #f8f9fa;
    color: #999;
    padding: 0 12px;
    top: -7px;
    font-size: 12px;
    left: 50%;
    transform: translate(-50%);
  }
`;

const SocialButtonGroup = styled.ul`
  margin-top: 30px;
  display: flex;
  justify-content: center;

  li > a {
    background-image: url('/image.png');
    display: inline-block;
    width: 36px;
    height: 36px;
    color: transparent;
  }
  li + li {
    margin-left: 10px;
  }
  .naver-icon {
    background-position: 0 0;
  }
  .kakao-icon {
    background-position: -38px 0;
  }
  .facebook-icon {
    background-position: -76px 0;
  }
`;

const ButtomMenu = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
  a {
    padding: 0 7px;
    text-decoration: none;
    color: #999;
    font-size: 12px;
  }

  a + a {
    border-left: 1px solid #999;
  }
`;

function AuthTemplate({ mode, children }: AuthTemplateProps) {
  return (
    <div>
      <Wrapper>
        <h1>
          <Link to="/">
            <img
              className="logo"
              src={`${process.env.PUBLIC_URL}/live.png`}
              alt=""
            />
          </Link>
        </h1>
        <div>
          {children}
          <SocialDvide>
            <span>소셜 로그인</span>
          </SocialDvide>
          <SocialButtonGroup>
            <li>
              <a href="/" className="naver-icon">
                네이버 로그인
              </a>
            </li>
            <li>
              <a href="/" className="kakao-icon">
                카카오 로그인
              </a>
            </li>
            <li>
              <a href="/" className="facebook-icon">
                카카오 로그인
              </a>
            </li>
          </SocialButtonGroup>
          <ButtomMenu>
            <Link to="/">비밀번호 찾기</Link>
            {mode === 'login' ? (
              <Link to="/register">회원 가입</Link>
            ) : (
              <Link to="/login">로그인</Link>
            )}
          </ButtomMenu>
        </div>
      </Wrapper>
    </div>
  );
}

export default AuthTemplate;
