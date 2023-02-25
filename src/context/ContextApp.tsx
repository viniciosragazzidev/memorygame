import { createContext, useState, useEffect } from "react";
type ContextType = {
  player: number;
  setPlayer:(player: number) => void;
  pointPlayer1: Number
  setPointPlayer1:(pointPlayer1: Number) => void;
  pointPlayer2: Number
  setPointPlayer2:(pointPlayer2: Number) => void;
}

export const DadosContext = createContext<ContextType>({
  player: 1,
  setPlayer: () => {},
  pointPlayer1: 0,
  setPointPlayer1: () => {},
  pointPlayer2: 0,
  setPointPlayer2: () => {},
});
const ContextProvider = ({ children }: {children: React.ReactNode}) => {
  const [player, setPlayer] = useState<number>(1);
  const [pointPlayer1, setPointPlayer1] = useState<Number>(0);

  const [pointPlayer2, setPointPlayer2] = useState<Number>(0);



    return (
      <DadosContext.Provider
        value={{
          player, setPlayer,  pointPlayer1,
          setPointPlayer1,
          pointPlayer2,
          setPointPlayer2,
        }}
      >
        {children}
      </DadosContext.Provider>
    );
  };
  
  export default ContextProvider;