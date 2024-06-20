import { useEffect, useState } from "react";

export const useDebounce = (value, delay) => {
  const [debouncedValue, setBouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setBouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};
