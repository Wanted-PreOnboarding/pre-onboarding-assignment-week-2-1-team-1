import React, { Fragment } from 'react';
import styled from '@emotion/styled';

import SearchBar from './components/SearchBar';
import SearchBarDetailList from './components/SearchBarDetailList';
import ResultList from './components/ResultList';
import ResultSummary from './components/ResultSummary';

import { useInfiniteRequest, useRequest } from '../../hooks/useRequest';
import queryKey from '../../util/querykey';
import SearchRequest from '../../api/search';
import useSearch from './hooks/useSearch';
import useAutoComplete from './hooks/useAutoComplete';

import { apiBase } from '../../api/api';

function Search() {
  const [searchTitle, onConfirmSearchTitle] = useSearch();
  const { autoTitle, onChangeAutoTitle, isFocused, onFocus, onBlur } = useAutoComplete();

  const initialUrl = `/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${searchTitle}&language=ko-KR`;

  const fetchMovies = async pageParam => {
    const data = await apiBase(pageParam);
    return data;
  };

  const {
    data: searchData,
    fetchNextPage,
    hasNextPage,
    isLoading: isSearchLoading,
    isError: isSearchError,
    error,
  } = useInfiniteRequest(
    queryKey.search(searchTitle),
    ({ pageParam = initialUrl }) => fetchMovies(pageParam),
    {
      enabled: !!searchTitle,
      getNextPageParam: lastPage => {
        const { page, total_pages } = lastPage.data;
        if (page >= total_pages) return undefined;

        const nextUrl = initialUrl + `&page=${page + 1}`;
        return nextUrl;
      },
    }
  );

  const {
    data: autoCompleteData,
    isLoading: isAutoLoading,
    isError: isAutoError,
  } = useRequest(
    queryKey.searchDetail(autoTitle),
    () => SearchRequest.getSearchedMovies(autoTitle),
    {
      enabled: !!autoTitle,
    }
  );

  return (
    <Fragment>
      <SearchBar
        title={autoTitle}
        onConfirmSearchTitle={onConfirmSearchTitle}
        onChangeAutoTitle={onChangeAutoTitle}
        onFocus={onFocus}
        onBlur={onBlur}
      />
      {isFocused && (
        <SearchBarDetailList
          movies={autoCompleteData}
          isLoading={isAutoLoading}
          isError={isAutoError}
          onConfirmSearchTitle={onConfirmSearchTitle}
          onChangeAutoTitle={onChangeAutoTitle}
          onBlur={onBlur}
        />
      )}
      <SectionContainer>
        <SummaryContainer>
          <ResultSummary movies={searchData} />
        </SummaryContainer>
        <ListContainer>
          <ResultList
            movies={searchData}
            fetchNextPage={fetchNextPage}
            hasNextPage={hasNextPage}
            isLoading={isSearchLoading}
            isError={isSearchError}
            error={error}
          />
        </ListContainer>
      </SectionContainer>
    </Fragment>
  );
}

export default Search;

const SectionContainer = styled.section`
  display: flex;
  justify-content: space-around;
  padding: 40px;
`;

const SummaryContainer = styled.div`
  margin-right: 15px;
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1180px;
`;
