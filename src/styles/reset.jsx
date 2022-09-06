import styled from '@emotion/styled';

export const AppContainer = styled.div`
  width: 1100px;
  min-width: 768px;
  height: 100%;
  margin: 0 auto;
  background-color: #ffffff;
  & table,
  div,
  * {
    box-sizing: border-box;
  }

  @media screen and (max-width: 1100px) {
    width: 100%;
  }
`;
