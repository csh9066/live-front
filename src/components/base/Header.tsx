import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../common/Button';
import { User } from '../../modules/user';

type HeaderProps = {
  user: User | null;
  onLogout: () => void;
};

const StyledHeader = styled.div`
  background-color: white;
  box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.1);
`;

const Wrapper = styled.div`
  max-width: 1000px;
  height: 76px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  .logo {
    img {
      height: 60px;
    }
  }
  .right-nav {
    display: flex;
    Button + Button {
      margin-top: 0;
      margin-left: 10px;
    }
    button {
      width: auto;
    }
  }
`;

function Header({ user, onLogout }: HeaderProps) {
  return (
    <StyledHeader>
      <Wrapper>
        <h3 className="logo">
          <Link to="/">
            <img src={`${process.env.PUBLIC_URL}/live.png`} alt="" />
          </Link>
        </h3>
        <div className="right-nav">
          <Button>
            {user ? (
              <Link to="/">방 생성</Link>
            ) : (
              <Link to="/login">로그인</Link>
            )}
          </Button>
          <Button color="gray">
            {user ? (
              <span onClick={onLogout}>로그 아웃</span>
            ) : (
              <Link to="/register">회원 가입</Link>
            )}
          </Button>
        </div>
      </Wrapper>
    </StyledHeader>
  );
}

export default Header;
