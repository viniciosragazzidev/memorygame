import React, { useContext } from "react";
import { RiGameFill } from "react-icons/ri";
import { BiTimeFive } from "react-icons/bi";

import { NavLink } from "react-router-dom";
import MemoryBox from "../../components/MemoryBox";
import { DadosContext } from "../../context/ContextApp";

export default function Game() {
  const {
    player,
    setPlayer,
    pointPlayer1,
    setPointPlayer1,
    pointPlayer2,
    setPointPlayer2,
  } = useContext(DadosContext);

  return (
    <div className="bg-gray-600 w-full h-screen">
      <header className="w-full h-10 bg-gray-700 text-white px-4 flex items-center justify-between">
        <NavLink to={"/"} className=" font-bold flex items-center gap-1">
          MemoryGame
          <RiGameFill className="" />
        </NavLink>

       

        <div className="time">
          <span className=" font-bold flex items-center gap-1">
            01:30 <BiTimeFive />
          </span>
        </div>
      </header>
      <MemoryBox />
    </div>
  );
}
