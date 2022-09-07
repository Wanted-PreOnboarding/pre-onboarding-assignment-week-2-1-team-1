import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

import SearchBarDetail from './SearchBarDetail';

function SearchBarDetailList({
  movies,
  isLoading,
  isError,
  onConfirmSearchTitle,
  onChangeAutoTitle,
  onBlur,
}) {
  if (!movies) return;
  if (isLoading) return;
  if (isError) return <p>Error</p>;

  return (
    <Container>
      {movies.data.results.slice(0, 10).map(movie => (
        <SearchBarDetail
          key={movie.id}
          title={movie.title}
          onConfirmSearchTitle={onConfirmSearchTitle}
          onChangeAutoTitle={onChangeAutoTitle}
          onBlur={onBlur}
        />
      ))}
    </Container>
  );
}

SearchBarDetailList.propTypes = {
  movies: PropTypes.object,
  isLoading: PropTypes.bool,
  isError: PropTypes.bool,
  onConfirmSearchTitle: PropTypes.func,
  onChangeAutoTitle: PropTypes.func,
  onBlur: PropTypes.func,
};

export default SearchBarDetailList;

const Container = styled.div`
  width: 100%;
  background-color: white;
`;
