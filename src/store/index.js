import { createContext, useContext } from "react";

const Context = createContext(null);

export const useGetter = () => {
  const { } = useContext(Context);
  return {};
};

export default Context;
