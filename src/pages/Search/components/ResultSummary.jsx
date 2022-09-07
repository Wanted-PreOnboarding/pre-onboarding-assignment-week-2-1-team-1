import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

import { Color } from '../../../styles/common';

function ResultSummary({ movies }) {
  if (!movies)
    return (
      <Container>
        <P>검색 결과 : 0</P>
      </Container>
    );

  return (
    <Container>
      <P>검색 결과 : {movies.pages[0].data.total_results}</P>
    </Container>
  );
}

ResultSummary.propTypes = {
  movies: PropTypes.object,
};

export default ResultSummary;

const Container = styled.div`
  display: block;
  width: 240px;
  border: 1px solid ${Color.GRAY100};
  border-radius: 8px;
  background-color: ${Color.Navy};
  padding-left: 10px;
  padding-right: 10px;
`;

const P = styled.p`
  font-size: 1.2rem;
  font-weight: 600;
  color: ${Color.White};
`;
