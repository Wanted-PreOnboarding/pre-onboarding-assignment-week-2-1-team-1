import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import styled from '@emotion/styled';
import { Color } from '../styles/common';

function Header() {
  const navigate = useNavigate();
  return (
    <>
      <HeaderContainer>
        <img
          src="/images/logo.png"
          alt="logo"
          onClick={() => {
            navigate('/');
          }}
        />
        <nav>
          <Link to="/">홈</Link>
          <Link to="/now_playing">현재 상영작</Link>
          <Link to="/upcoming">상영 예정작</Link>
          <Link to="/top_rated">영화 순위</Link>
          <Link to="/search">영화 검색</Link>
        </nav>
      </HeaderContainer>
      <div style={{ height: '100px', marginBottom: '20px' }}>공백</div>
    </>
  );
}

export default Header;

const HeaderContainer = styled.header`
  width: 100%;
  height: 100px;
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  z-index: 10000;

  & img {
    height: 80px;
  }

  & a {
    margin: 40px;
    font-size: 18px;
    font-weight: 700;
    color: ${Color.GRAY200};
    text-decoration: none;

    &:hover {
      color: ${Color.BLUE200};
    }
  }
`;
