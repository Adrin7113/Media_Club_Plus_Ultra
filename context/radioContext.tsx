"use client";
import { createContext, useReducer } from "react";
import { ReactNode } from "react";

export const RadioContext = createContext(null);

export const radiosReducer = (state: any, action: any) => {
  switch (action.type) {
    case "CHANGE_RADIO":
      return {
        current: action.payload,
      };
    default:
      return state;
  }
};

export const RadioContextProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(radiosReducer, {
    current: 0,
  });

  return (
    <RadioContext.Provider value={{ ...state, dispatch }}>
      {children}
    </RadioContext.Provider>
  );
};
