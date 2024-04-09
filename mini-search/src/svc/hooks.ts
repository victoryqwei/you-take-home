import { useEffect, useState } from "react";

export function useLocalStorage<T>(key: string, initialValue: T): [T, React.Dispatch<React.SetStateAction<T>>] {
  const localValue = window.localStorage.getItem(key);
  const [value, setValue] = useState(localValue ? JSON.parse(localValue) : initialValue);

  useEffect(() => {
    if (typeof window !== "undefined") window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}
