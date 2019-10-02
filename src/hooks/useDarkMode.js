import { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = (key, initialValue) => {
  const [darkMode, setDarkMode] = useLocalStorage(key, initialValue);

  const handleChanges = updatedValue => {
    setDarkMode(updatedValue);
  };

  useEffect(() => {
    if (darkMode === true) {
      return document.body.classList.add('dark-mode');
    } else {
      return document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  return [darkMode, handleChanges, setDarkMode];
};
