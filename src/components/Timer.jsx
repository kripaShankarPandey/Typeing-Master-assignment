import React, { useState, useEffect } from 'react';

function Timer() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(prevTime => prevTime + 1);
    }, 1000);

    // Stop the timer after 5 minutes (300 seconds)
    setTimeout(() => {
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

  return <div>Timer: {formatTime(time)}</div>;
}

export default Timer;
