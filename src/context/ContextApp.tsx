import { createContext, useState, useEffect } from "react";
export const DadosContext = createContext({});


const ContextProvider = ({ children }: {children: React.ReactNode}) => {


    return (
      <DadosContext.Provider
        value={{
         
        }}
      >
        {children}
      </DadosContext.Provider>
    );
  };
  
  export default ContextProvider;