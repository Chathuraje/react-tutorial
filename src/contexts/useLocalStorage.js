export const useLocalStorage = (key) => {
  const setItem = (value) => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(error);
    }
  };

  const getItem = () => {
    try {
      const items = window.localStorage.getItem(key);
      return items ? JSON.parse(items) : undefined;
    } catch (error) {
      console.error(error);
    }
  };

  const deleteItem = () => {
    try {
      window.localStorage.removeItem(key);
    } catch (error) {
      console.error(error);
    }
  };

  return {
    setItem,
    getItem,
    deleteItem,
  };
};
