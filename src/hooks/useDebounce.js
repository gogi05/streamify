import { useRef } from "react";

const useDebounce = (fn, delay) => {
  const timerRef = useRef(null);

  return (...args) => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = setTimeout(() => {
      fn(...args);
    }, delay);
  };
};

export default useDebounce;
