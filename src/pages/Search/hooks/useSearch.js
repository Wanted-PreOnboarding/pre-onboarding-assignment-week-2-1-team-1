import { useState } from 'react';

const useSearch = () => {
  const [searchTitle, setSearchTitle] = useState('');

  const onConfirmSearchTitle = value => {
    setSearchTitle(value);
  };

  return [searchTitle, onConfirmSearchTitle];
};

export default useSearch;
