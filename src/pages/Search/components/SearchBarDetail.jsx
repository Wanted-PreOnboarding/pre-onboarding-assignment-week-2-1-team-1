import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

import { Color } from '../../../styles/common';

function SearchBarDetail({ title, onConfirmSearchTitle, onChangeAutoTitle, onBlur }) {
  const onClick = () => {
    onConfirmSearchTitle(title);
    onChangeAutoTitle(title);
    onBlur();
  };

  return <Container onClick={onClick}>{title}</Container>;
}

SearchBarDetail.propTypes = {
  title: PropTypes.string,
  onConfirmSearchTitle: PropTypes.func,
  onChangeAutoTitle: PropTypes.func,
  onBlur: PropTypes.func,
};

export default SearchBarDetail;

const Container = styled.div`
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid ${Color.GRAY200};
  &:hover {
    background-color: ${Color.GRAY100};
    color: ${Color.White};
    cursor: pointer;
  }
`;
