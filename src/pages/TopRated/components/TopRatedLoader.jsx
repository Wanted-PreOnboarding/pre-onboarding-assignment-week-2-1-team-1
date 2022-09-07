import React from 'react';
import styled from '@emotion/styled';
import Skeleton from '../../../components/Skeleton';

export default function TopRatedLoader() {
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
  & span {
    margin: 5px;
  }
`;
