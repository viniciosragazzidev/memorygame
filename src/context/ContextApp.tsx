import { createContext, useState } from "react";
import audio_0 from "../media/music1.mp3";
import audio_1 from "../media/music2.mp3";

const getRandomAudio = () => {
  const randomNum = Math.floor(Math.random() * 2);
  console.log(randomNum);
  
  return randomNum === 0 ? new Audio(audio_0) : new Audio(audio_1);
};

type ContextType = {
  player: number;
  setPlayer: (player: number) => void;
  pointPlayer1: Number;
  setPointPlayer1: (pointPlayer1: Number) => void;
  pointPlayer2: Number;
  setPointPlayer2: (pointPlayer2: Number) => void;
  audioMp3: HTMLAudioElement;
  setAudioMp3: (audio: HTMLAudioElement) => void;
};

export const DadosContext = createContext<ContextType>({
  player: 1,
  setPlayer: () => {},
  pointPlayer1: 0,
  setPointPlayer1: () => {},
  pointPlayer2: 0,
  setPointPlayer2: () => {},
  audioMp3: new Audio(audio_1),
  setAudioMp3: () => {},
});

const ContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [player, setPlayer] = useState<number>(1);
  const [pointPlayer1, setPointPlayer1] = useState<Number>(0);
  const [pointPlayer2, setPointPlayer2] = useState<Number>(0);
  const [audioMp3, setAudioMp3] = useState<HTMLAudioElement>(getRandomAudio());

  return (
    <DadosContext.Provider
      value={{
        player,
        setPlayer,
        pointPlayer1,
        setPointPlayer1,
        pointPlayer2,
        setPointPlayer2,
        audioMp3,
        setAudioMp3,
      }}
    >
      {children}
    </DadosContext.Provider>
  );
};

export default ContextProvider;
