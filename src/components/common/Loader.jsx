import React from 'react';
import styled from '@emotion/styled';
import Skeleton from '../Skeleton';

export default function Loader() {
  const skeltons = Array.from({ length: 20 }, (_, idx) => idx);
  return (
    <Container>
      {skeltons.map(s => (
        <Skeleton key={s} width={200} height={300} rounded={true} animation={true} />
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  & span {
    margin: 8px;
  }
`;
