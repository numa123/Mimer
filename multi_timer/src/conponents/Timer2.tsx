import { Button, ButtonGroup, TextField } from "@mui/material";
import React, { useState, useRef, useCallback, useEffect } from "react";

type TimeObj = {
  hour: number;
  min: number;
  sec: number;
};

const Timer2: React.FC = () => {
  const [time, setTime] = useState(300);
  const [userTime, setUserTime] = useState("");
  const [memoUserTime, setMemoUserTime] = useState("");
  const [defaultTime, setDefaultTime] = useState(300);
  const [displayTime, setDisplayTime] = useState("");
  const [label, setLabel] = useState("");

  const intervalRef = useRef<any>(null); //ここの型がanyなの悔しい

  const addZero = (x: number) => {
    if (x < 10) {
      return "0" + x;
    } else {
      return x;
    }
  };

  const settingUserTime = () => {
    setMemoUserTime(userTime);
    // setUserTime("");
    if (intervalRef.current === null) {
      const numberUserTime = Number(userTime);
      setTime(numberUserTime);
      setDefaultTime(numberUserTime);
    }
  };

  const toStringTime = (): void => {
    const timeObj: TimeObj = {
      hour: Math.floor(time / 3600),
      min: Math.floor((time % 3600) / 60),
      sec: (time % 3600) % 60,
    };
    const { hour, min, sec } = timeObj; //分割代入
    const screenTime = `${addZero(hour)}:${addZero(min)}:${addZero(sec)}`;
    setDisplayTime(screenTime);
  };

  useEffect(() => toStringTime(), [time]);

  //各ボタンの操作
  const start = (): void => {
    if (intervalRef.current !== null) {
      return;
    } else if (intervalRef.current === null && time === 0) {
      return;
    }
    intervalRef.current = setInterval((): void => {
      setTime((t) => t - 1);
    }, 1000);
  };

  const stop = useCallback(() => {
    if (intervalRef.current === null) {
      return;
    }
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  }, []);

  const final = (): void => {
    if (time === 0) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => final(), [time]);

  const restart = (): void => {
    if (intervalRef.current === null) {
      setTime(defaultTime);
    }
  };
  // const consoleInter = () => console.log(intervalRef.current);
  //
  //
  //
  return (
    <div className="bg-gray-100 w-96 pb-8 pt-5 rounded-xl mt-12 ">
      <div>
        <div>
          {/* <h1>{time}</h1> */}
          <input
            className="bg-gray-400 bg-opacity-25 rounded-md mt-2.5 h-11 text-center w-72 mb-2.5"
            type="text"
            placeholder="タイマーのラベル"
            value={label}
            onChange={(e) => setLabel(e.target.value)}
          />
        </div>
        <h1 className="text-5xl font-semibold" style={{color:"#333333"}}>{displayTime}</h1>
        <div className="inline-flex mt-3.5">
          <button
            className="bg-yellow-400 hover:bg-yellow-500 text-gray-700 font-bold py-2 px-4 rounded-l"
            onClick={start}
          >
            スタート
          </button>
          <button
            className="bg-gray-300 hover:bg-gray-400 text-gray-600 font-bold py-2 px-4 rounded-m"
            onClick={stop}
          >
            ストップ
          </button>
          <button
            className="bg-gray-300 hover:bg-gray-400 text-gray-600 font-bold py-2 px-4  rounded-r"
            onClick={restart}
          >
            再セット
          </button>
        </div>
      </div>
      <div>
        <input
          className="bg-gray-400 bg-opacity-25 rounded-l w-52 h-10 text-center"
          type="number"
          placeholder="秒数で指定"
          value={userTime}
          onChange={(e) => setUserTime(e.target.value)}
        />
        <button
          onClick={settingUserTime}
          className="bg-gray-300 hover:bg-gray-400 text-gray-600 font-bold py-2 px-4 mt-2.5 rounded-r"
        >
          セット
        </button>
      </div>
    </div>
  );
};

export default Timer2;
