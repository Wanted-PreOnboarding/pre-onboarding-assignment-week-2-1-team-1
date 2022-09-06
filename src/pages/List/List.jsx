import React from 'react';
import styled from '@emotion/styled';

import MovieCard from '../../components/common/MovieCard';

function List() {
  return (
    <ListContainer>
      <MovieCard />
    </ListContainer>
  );
}

export default List;

const ListContainer = styled.div``;
