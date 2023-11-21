import { useState, useEffect } from "react";

type SetValue<T> = (value: T | ((val: T) => T)) => void;
type UseLocalStorage<T> = [T, SetValue<T>];

function useLocalStorage<T>(key: string, initialValue: T): UseLocalStorage<T> {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error("Error reading from localStorage:", error);
      return initialValue;
    }
  });

  const setValue: SetValue<T> = (value) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      if (valueToStore !== storedValue) {
        localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      console.error("Error writing to localStorage:", error);
    }
  };

  useEffect(() => {
    if (!localStorage) {
      console.error("localStorage is not available");
      return;
    }

    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === key) {
        try {
          setStoredValue(JSON.parse(e.newValue!));
        } catch (error) {
          console.error("Error parsing data from storage:", error);
        }
      }
    };

    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [key]);

  return [storedValue, setValue];
}

export default useLocalStorage;
