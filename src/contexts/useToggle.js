import { useState } from "react";

export const useToggle = (initialVal = false) => {
  const [isVisible, setIsVisble] = useState(initialVal);

  const toggle = () => {
    setIsVisble(!isVisible);
  };

  return { isVisible, toggle };

  // return [isVisible, setIsVisble] // This is the old way of returning the state and the setter function
};
