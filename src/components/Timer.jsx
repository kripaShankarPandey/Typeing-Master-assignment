import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { showResultsAction } from "../redux/action";

function Timer({ isStart, isStop }) {
  const dispatch = useDispatch();
  console.log(isStart, isStop);
  const [time, setTime] = useState(0);
  //change timer after every 1000 ms.
  useEffect(() => {
    let timer;
    if (isStart) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }

    if (isStop) {
      dispatch(showResultsAction());
      clearInterval(timer);
    }
    return () => {
      clearInterval(timer);
    };
  }, [isStart, isStop]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${remainingSeconds
      .toString()
      .padStart(2, "0")}`;
  };
  // showing time in MM:SS format
  return (
    <div style={{ color: "yellow", fontWeight: "bold" }}>
      Timer: {formatTime(time)}
    </div>
  );
}

export default Timer;
