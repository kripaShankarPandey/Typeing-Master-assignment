import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { showResultsAction } from '../redux/action';

function Timer() {
  const dispatch=useDispatch();
 
  const [time, setTime] = useState(0);
//change timer after every 1000 ms
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(prevTime => prevTime + 1);
    }, 1000);

    // Stop the timer after 5 minutes (300 seconds).
    setTimeout(() => {
      //dispatching action to reducer to the show result.
      dispatch(showResultsAction())
      clearInterval(timer);
    }, 300000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds
      .toString()
      .padStart(2, '0')}`;
  };

  return <div style={{color:"yellow",fontWeight:"bold"}}>Timer: {formatTime(time)}</div>;
}

export default Timer;
