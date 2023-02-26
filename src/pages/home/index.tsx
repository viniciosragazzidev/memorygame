import React, { useContext, useEffect, useState } from "react";

import { RiGameFill } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import { DadosContext } from "../../context/ContextApp";

export default function Home() {
  const { audioMp3, setAudioMp3 } = useContext(DadosContext);

  useEffect(() => {
    audioMp3.play();
    audioMp3.volume = 0.5;
  }, []);
  return (
    <div className="w-full h-screen bg-gray-700 flex justify-center items-center">
      <div className="container flex  flex-col items-center gap-3">
        <h1 className="text-blue-600 font-bold text-3xl md:text-6xl  flex">
          Memory{" "}
          <span className="text-yellow-500 flex gap-2">
            Game <RiGameFill className="text-yellow-500" />
          </span>
        </h1>
        <p className="text-base-100 text-xs md:text-sm opacity-70">
          Treine sua memoria da forma mais divertida!
        </p>

        <NavLink
          to={"/game"}
          className="mt-6 bg-yellow-500  px-6 py-1 cursor-pointer text-gray-600 font-bold rounded-lg hover:scale-90 transition-all"
        >
          Iniciar
        </NavLink>
      </div>
    </div>
  );
}
