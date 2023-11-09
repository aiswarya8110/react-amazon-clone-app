import { createContext, useReducer } from 'react';
import { initialState, reducer } from './reducer'

export const ShoppingContext = createContext();

export function ShoppingContextProvider({ children }){
   console.count("shopping context provider");
   const [state, dispatch] = useReducer(reducer, initialState);

   return <ShoppingContext.Provider value={{state, dispatch}}>{children}</ShoppingContext.Provider>
}