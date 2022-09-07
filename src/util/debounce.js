const debounce = (callback, duration) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => callback(...args), duration);
  };
};

export default debounce;
