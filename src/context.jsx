import { useContext, useReducer, useEffect, createContext } from 'react';
import reducer from './reducer';
import cartItems from './data';

import {
  CLEAR_CART,
  INCREASE,
  DECREASE,
  REMOVE,
  LOADING,
  DISPLAY_ITEMS,
} from './action';

const AppContext = createContext();

const initialState = {
  loading: false,
  cart: new Map(cartItems.map((item) => [item.id, item])),
  //   cart: new Map(),
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
