import React from 'react';
import styled from '@emotion/styled';
import { Color } from '../styles/common';

function Footer() {
  /* eslint-disable */
  return (
    <FooterContainer>
      <ul>
        <li>
          <a target="_blank" href="https://github.com/kagrin97">
            강민규
          </a>
        </li>
        <li>
          <a target="_blank" href="https://github.com/sunpl13">
            김정수
          </a>
        </li>
        <li>
          <a target="_blank" href="https://github.com/kagriunsnruun97">
            류웅선
          </a>
        </li>
        <li>
          <a target="_blank" href="https://github.com/BaikSeungJeon">
            백승전
          </a>
        </li>
        <li>
          <a target="_blank" href="https://github.com/kunnyCode">
            윤여건
          </a>
        </li>
        <li>
          <a target="_blank" href="https://github.com/gomgun">
            최홍규
          </a>
        </li>
      </ul>
      <div>
        <p>2022 &copy; I.M.LABFLIX Corporation</p>
      </div>
    </FooterContainer>
  );
}
export default Footer;

const FooterContainer = styled.footer`
  margin-top: 57vh;
  z-index: 1000;
  width: 100%;
  bottom: 0;

  & ul {
    height: 50px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 70px;
    margin: 0;
    background-color: ${Color.GRAY100};

    & li {
      list-style: none;

      & a {
        color: #999999;
        text-decoration: none;
        font-size: 14px;

        &:hover {
          color: ${Color.BLUE200};
        }
      }
    }
  }

  & div {
    height: 50px;
    background-color: ${Color.GRAY200};
    text-align: center;

    & p {
      margin: 0;
      line-height: 50px;
      font-size: 16px;
      font-weight: 200;
      color: #aaaaaa;
    }
  }
`;
