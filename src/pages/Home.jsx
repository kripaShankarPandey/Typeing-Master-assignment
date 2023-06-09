import React, { useEffect, useState } from "react";
import styles from "./Home.module.css";
import Timer from "../components/Timer";
import { useSelector, useDispatch } from "react-redux";
import {
  correctKeyCountAction,
  keyCountAction,
  startAction,
  stopAction,
} from "../redux/action";
const Home = () => {
  const dispatch = useDispatch();
  //Getting Data from Redux store
  const { str, keyCount, correctKeyCount, showResult, isStart, isStop } =
    useSelector((store) => store);
  const [data, setData] = useState("");
  const [randomCharater, setRandomCharater] = useState("");
  const [text, setText] = useState("");

  useEffect(() => {
    //Taking a random value to show characters
    let a = Math.floor(Math.random() * str.length);
    setData(str[a]);
    setRandomCharater(str[a]);
    console.log(text[text.length - 1], randomCharater);
    if (text[text.length - 1] === randomCharater) {
      dispatch(correctKeyCountAction());
    }
  }, [text]);

  const handleInput = (e) => {
    setText(e.target.value);
    //dispatching action to count number of pressed keys
    dispatch(keyCountAction());
  };
  //for stop button
  const handleStop = () => {
    dispatch(stopAction());
  };
  //for start button
  const handleStart = () => {
    dispatch(startAction());
  };
  const handleRest = () => {
    window.location.reload();
  };
  return (
    <div id={styles.main}>
      <h1>Typing Master⌨️</h1>
      <Timer isStart={isStart} isStop={isStop} />
      <h1>
        Type 👉<span>{data}</span>{" "}
      </h1>
      <textarea
        disabled={showResult || !isStart}
        placeholder="type here"
        rows={15}
        cols={90}
        className={styles.textarea}
        onChange={handleInput}
        value={text}
      ></textarea>
      {/* counting total key pressed in 5 min and accuracy of correct key presses. */}
      <div className={styles.resuls}>
        {showResult === true ? (
          <h1>
            Total key pressed <span>{keyCount}</span> total correct key presses{" "}
            <span>{correctKeyCount}</span> accuracy rate{" "}
            <span> {Math.floor((correctKeyCount * 100) / keyCount)}%</span>😊
          </h1>
        ) : (
          ""
        )}
      </div>
      <button onClick={handleStart}>START</button>
      <button onClick={handleStop}>STOP</button>
      <button onClick={handleRest}>RESTART</button>
    </div>
  );
};

export default Home;
