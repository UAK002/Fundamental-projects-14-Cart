import { useContext, useReducer, useEffect, createContext } from 'react';
import reducer from './reducer';

const AppContext = createContext();

const initialState = {
  loading: false,
  cart: [],
};

export const AppProvider = ({ children }) => {
  //   const greeting = 'Hello there';

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    // <AppContext.Provider value={{ greeting }}>{children}</AppContext.Provider>
    <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
