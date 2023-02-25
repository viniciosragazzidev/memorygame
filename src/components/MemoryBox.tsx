import React, { useState, useEffect, useContext } from "react";
import { DadosContext } from "../context/ContextApp";
export default function MemoryBox() {
  const {
    player,
    setPlayer,
    pointPlayer1,
    setPointPlayer1,
    pointPlayer2,
    setPointPlayer2,
  } = useContext(DadosContext);

  const cards: Array<{
    value: string;
    done: boolean;
    showTemp: boolean;
    discoverBy: number;
    actionTemp: string;
  }> = [
    { value: "1", done: false, showTemp: false, discoverBy: 0, actionTemp: "" },
    { value: "4", done: false, showTemp: false, discoverBy: 0, actionTemp: "" },
    { value: "3", done: false, showTemp: false, discoverBy: 0, actionTemp: "" },
    { value: "2", done: false, showTemp: false, discoverBy: 0, actionTemp: "" },
    { value: "8", done: false, showTemp: false, discoverBy: 0, actionTemp: "" },
    { value: "4", done: false, showTemp: false, discoverBy: 0, actionTemp: "" },
    { value: "1", done: false, showTemp: false, discoverBy: 0, actionTemp: "" },
    { value: "5", done: false, showTemp: false, discoverBy: 0, actionTemp: "" },
    { value: "6", done: false, showTemp: false, discoverBy: 0, actionTemp: "" },
    { value: "7", done: false, showTemp: false, discoverBy: 0, actionTemp: "" },
    { value: "8", done: false, showTemp: false, discoverBy: 0, actionTemp: "" },
    { value: "2", done: false, showTemp: false, discoverBy: 0, actionTemp: "" },
    { value: "3", done: false, showTemp: false, discoverBy: 0, actionTemp: "" },
    { value: "5", done: false, showTemp: false, discoverBy: 0, actionTemp: "" },
    { value: "6", done: false, showTemp: false, discoverBy: 0, actionTemp: "" },
    { value: "7", done: false, showTemp: false, discoverBy: 0, actionTemp: "" },
    { value: "9", done: false, showTemp: false, discoverBy: 0, actionTemp: "" },
    { value: "9", done: false, showTemp: false, discoverBy: 0, actionTemp: "" },
    {
      value: "10",
      done: false,
      showTemp: false,
      discoverBy: 0,
      actionTemp: "",
    },
    {
      value: "10",
      done: false,
      showTemp: false,
      discoverBy: 0,
      actionTemp: "",
    },
  ];

  function shuffleArray(
    arr: Array<{
      value: string;
      done: boolean;
      showTemp: boolean;
      discoverBy: number;
      actionTemp: string;
    }>
  ) {
    // Loop em todos os elementos
    for (let i = arr.length - 1; i > 0; i--) {
      // Escolhendo elemento aleatório
      const j = Math.floor(Math.random() * (i + 1));
      // Reposicionando elemento
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    // Retornando array com aleatoriedade
    return arr;
  }
  const [arrayNew, setArrayNew] = useState<
    Array<{
      value: string;
      done: boolean;
      showTemp: boolean;
      discoverBy: number;
      actionTemp: string;
    }>
  >([]);

  useEffect(() => {
    setArrayNew(shuffleArray(cards));
  }, []);

  const [prevSelect, setPrevSelect] = useState("");
  const [prevIndex, setPrevIndex] = useState(0);
  const [count, setCount] = useState(0);
  const [countDone, setCountDone] = useState(0);
  const [play, setPlay] = useState(false);
  const [cliquevel, setCliquevel] = useState(false);

  const handleCard = (value: string, index: number, done:boolean) => {
    console.log("ssss");

    if(!done){
      if (play && cliquevel) {
        if (count === 0) {
          // Primeira Jogada
          setPrevSelect(value);
          setPrevIndex(index);
          setCount((currenteCount) => currenteCount + 1);
          const newArr = arrayNew.map((card, i) => {
            if (i === index) {
              return { ...card, showTemp: true };
            } else {
              return card;
            }
          });
  
          setArrayNew(newArr);
        } else {
          // Segunda Jogada
          if (index != prevIndex) {
            // Cards Diferentes clicados
            const newArr = arrayNew.map((card, i) => {
              if (i === index) {
                return { ...card, showTemp: true };
              } else {
                return card;
              }
            });
  
            setArrayNew(newArr);
            if (value === prevSelect) {
              //  Acertou!
  
              const newArr = arrayNew.map((card, i) => {
                if (i === index || i === prevIndex) {
                  return { ...card, discoverBy: player, done: true };
                } else {
                  return card;
                }
              });
  
              setArrayNew(newArr);
              setCountDone((currenteCountDone) => currenteCountDone + 1);
  
              if (player === 1) {
                setPointPlayer1(Number(pointPlayer1) + 500);
              } else {
                setPointPlayer2(Number(pointPlayer2) + 500);
              }
  
              console.log("Acertou", countDone);
              if (countDone === arrayNew.length / 2 - 1) {
                setTimeout(() => {
                  const newArr = arrayNew.map((card, i) => {
                    return { ...card, done: false, showTemp: false };
                  });
  
                  console.log(newArr);
                  setCliquevel(false);
                  setArrayNew(newArr);
                  setCountDone(0);
                  setPointPlayer1(0);
                  setPointPlayer2(0);
                  const winner =
                    pointPlayer1 > pointPlayer2 ? "Player 1" : "Player 2";
                  alert("Vencedor: " + winner);
                }, 500);
              }
            } else {
              setCliquevel(false);
  
              const newArr = arrayNew.map((card, i) => {
                if (i === index || i === prevIndex) {
                  return { ...card, showTemp: true, actionTemp: "errou" };
                } else {
                  return card;
                }
              });
              setArrayNew(newArr);
              setTimeout(() => {
                const newArr = arrayNew.map((card, i) => {
                  if (i === index || i === prevIndex) {
                    return { ...card, showTemp: false, actionTemp: "" };
                  } else {
                    return card;
                  }
                });
  
                setArrayNew(newArr);
                console.log("errou");
  
                if (player === 1) {
                  setPlayer(2);
                } else {
                  setPlayer(1);
                }
  
                setCliquevel(true);
              }, 1000);
            }
          } else {
            alert("Escolha um card diferente");
          }
          setPrevIndex(0);
          setPrevSelect("");
          setCount(0);
        }
      }
    }
  };

  const handleStart = () => {
    const newArr = arrayNew.map((card, i) => {
      return { ...card, showTemp: true };
    });
    setArrayNew(newArr);

    setTimeout(() => {
      const newArr = arrayNew.map((card, i) => {
        return { ...card, showTemp: false };
      });
      setPlay(true);
      setCliquevel(true);
      setArrayNew(newArr);
      console.log(newArr);
    }, 2000);
  };
  const handleRestart = () => {
    setPlay(false);
    setCliquevel(false);
    setArrayNew(shuffleArray(cards));
    setCountDone(0);
    setPointPlayer1(0);
    setPointPlayer2(0);
  };

  return (
    <div className="w-full h-[calc(100vh-40px)] flex flex-col justify-center items-center gap-2">
      <div className="flex  gap-4 my-4">
        <div className="score flex items-center gap-5">
          <span
            className={`font-bold text-white    transition-transform ${
              player === 1 ? "active" : "text-sm "
            }`}
          >
            Player 1:{" "}
            <span className="text-sm text-blue-600  ">
              {pointPlayer1.toString()}
            </span>
          </span>

          <span
            className={`font-bold text-white   transition-transform ${
              player === 2 ? "active" : "text-sm"
            }`}
          >
            Player 2:{" "}
            <span className="text-sm text-red-600">
              {pointPlayer2.toString()}
            </span>
          </span>
        </div>
        {!play ? (
          <button
            onClick={() => {
              handleStart();
            }}
            className=" bg-yellow-500  px-6 py-1 cursor-pointer text-gray-600 font-bold rounded-lg hover:scale-90 transition-all"
          >
            Iniciar
          </button>
        ) : (
          <button
            onClick={() => {
              handleRestart();
            }}
            className=" bg-red-500  px-6 py-1 cursor-pointer text-gray-600 font-bold rounded-lg hover:scale-90 transition-all"
          >
            Reiniciar
          </button>
        )}
      </div>
      <div className="w-[85vw] h-[75vw] max-w-[600px] max-h-[450px] bg-gray-400 rounded-xl p-2 grid grid-cols-5 grid-rows-4">
        {arrayNew.map((card, index) => (
          <div
            key={index}
            onClick={() => {
              handleCard(card.value, index, card.done);
            }}
            className={`${
              card.actionTemp === "errou"
                ? "border-red-500 border-3 tremer"
                : card.actionTemp === "acertou"
                ? "border-green-500 border-3 tremer"
                : ""
            }  card relative border-white border  flex items-center justify-center after:transition-transform text-white cursor-pointer hover:opacity-90 transition-all after:w-full after:h-full after:top-0 after:left-0 after:absolute after:bg-gray-600 overflow-hidden ${
              card.done || card.showTemp
                ? "after:translate-x-[100%]"
                : "after:translate-x-0"
            } `}
          >
            {/* <div
              className={` ${
                card.done || card.showTemp
                  ? "translate-x-0"
                  : "translate-x-[100%]"
              } w-full h-full absolute top-0 left-0 bg-gray-600`}
            ></div> */}
            <p
              className={`transition-all   ${
                card.discoverBy === 1
                  ? "text-blue-500"
                  : card.discoverBy === 2
                  ? "text-red-500"
                  : ""
              }`}
            >
              {card.value}
            </p>
            {/* {card.done ? <p>done</p> : <p>Undone</p>} */}
          </div>
        ))}
      </div>
    </div>
  );
}
