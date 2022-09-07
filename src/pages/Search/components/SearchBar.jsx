import React, { useRef } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

import { MdSearch } from 'react-icons/md';
import { MdClear } from 'react-icons/md';

import { Color } from '../../../styles/common';

function SearchBar({ title, onConfirmSearchTitle, onChangeAutoTitle, onFocus, onBlur }) {
  const inputRef = useRef();

  const onConfirm = () => {
    onConfirmSearchTitle(inputRef.current.value);
    onBlur();
  };

  return (
    <Container>
      <InputCaontainer>
        <MdSearch size={'24'} onClick={onConfirm} />
        <Input
          placeholder="영화 검색"
          value={title}
          onChange={onChangeAutoTitle}
          ref={inputRef}
          onFocus={onFocus}
        />
        <MdClear />
      </InputCaontainer>
    </Container>
  );
}

SearchBar.propTypes = {
  title: PropTypes.string,
  onConfirmSearchTitle: PropTypes.func,
  onChangeAutoTitle: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
};

export default SearchBar;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid ${Color.GRAY200};
  border-bottom: 1px solid ${Color.GRAY200};
`;

const InputCaontainer = styled.div`
  width: 1440px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input`
  width: 100%;
  height: 44px;
  border: none;
  outline: none;
  font-size: 1rem;
  padding-left: 5px;
`;
