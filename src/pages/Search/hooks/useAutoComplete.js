import { useState, useCallback } from 'react';

import debounce from '../../../util/debounce';

const useAutoComplete = () => {
  const [autoTitle, setAutoTitle] = useState();
  const [isFocused, setIsFocused] = useState(false);

  const onChangeAutoTitle = useCallback(
    e => {
      if (typeof e === 'string') {
        setAutoTitle(e);
      } else {
        debounce(setAutoTitle(e.target.value), 500);
      }
    },
    [autoTitle]
  );

  const onFocus = () => {
    setIsFocused(true);
  };

  const onBlur = () => {
    setIsFocused(false);
  };

  return { autoTitle, onChangeAutoTitle, isFocused, onFocus, onBlur };
};

export default useAutoComplete;
