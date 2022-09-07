import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import PropType from 'prop-types';

const Stars = ({ vote_average }) => {
  const starsPercentValue = vote_average * 10;

  return (
    <StarsWrapper className="stars">
      <StartWrapper starsPercentValue={starsPercentValue}>
        <Starts src="/images/stars.png" alt="별점" />
      </StartWrapper>
      <GrayStars src="/images/grayStars.png" alt="별점" />
    </StarsWrapper>
  );
};

export default Stars;

Stars.propTypes = {
  vote_average: PropType.number,
};

const StarsWrapper = styled.div`
  position: relative;
  display: flex;
`;

const dynamicWidth = prop => css`
  width: ${prop.starsPercentValue}px;
`;

const StartWrapper = styled.div`
  z-index: 1000;
  height: 19px;
  overflow: hidden;
  ${dynamicWidth}
`;

const Starts = styled.img`
  position: relative;
  z-index: 10;
  height: 19px;
  width: 100px;
`;

const GrayStars = styled.img`
  position: absolute;
  top: 0;
  width: 100px;
  height: 19px;
`;
