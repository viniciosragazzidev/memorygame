import React, { useContext, useEffect, useState } from "react";
import { RiGameFill } from "react-icons/ri";
import { AiFillSound } from "react-icons/ai";
import MemoryBox from "../../components/MemoryBox";
import { DadosContext } from "../../context/ContextApp";

export default function Game() {
  const { audioMp3, setAudioMp3 } = useContext(DadosContext);
  const [volumeA, setVolumeA] = useState(true);



  const handleStopMusic = () => {
    if (volumeA) {
      setVolumeA(false);
      audioMp3.volume = 0;
    } else {
      setVolumeA(true);
      audioMp3.volume = 0.5;
    }
  };

  return (
    <div className="bg-gray-600 w-full ">
      <header className="w-full h-10 bg-gray-700 text-white px-4 flex items-center justify-between">
        <a href="/" className=" font-bold flex items-center gap-1">
          MemoryGame
          <RiGameFill className="" />
        </a>

        <div className="time">
          <span
            className=" cursor-pointer"
            onClick={() => {
              handleStopMusic();
            }}
          >
            <AiFillSound/>
          </span>
        </div>
      </header>
      <MemoryBox />
    </div>
  );
}
