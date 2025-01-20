import { useRef } from "react";

const useThrottle = (fn, delay) => {
  const lastCall = useRef(0);

  return (...args) => {
    const now = new Date().getTime();
    if (now - lastCall.current >= delay) {
      fn(...args);
      lastCall.current = now;
    }
  };
};

export default useThrottle;
