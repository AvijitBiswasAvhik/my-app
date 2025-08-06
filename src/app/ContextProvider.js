"use client";
import { createContext,useState } from 'react';

const MyContext = createContext();

export default function ContextProvider({children}) {
    
  return (
    <MyContext.Provider value={{}}>
      {children}
    </MyContext.Provider>
  )
}
