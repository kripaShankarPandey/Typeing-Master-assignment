import React, { useEffect, useState } from "react";
import styles from "./Home.module.css";
import Timer from "../components/Timer";
import { useSelector, useDispatch } from "react-redux";
import { correctKeyCountAction, keyCountAction } from "../redux/action";
const Home = () => {
  // const str=["a","s","d","f","j","k","l",";"]
  const dispatch = useDispatch();
  const { str, keyCount, correctKeyCount } = useSelector((store) => store);
  const [data, setData] = useState("");
  const [randomCharater, setRandomCharater] = useState("");
  const [text, setText] = useState("");
  // console.log(str,keyCount,correctKeyCount)
  useEffect(() => {
    let a = Math.floor(Math.random() * str.length);
    setData(str[a]);
    setRandomCharater(str[a]);
    if (text[text.length - 1] === randomCharater) {
        dispatch(correctKeyCountAction(1));
      }
      console.log("lc", text[text.length - 1], "random", randomCharater,correctKeyCount,keyCount,"ketCount");
  }, [text]);
  const handleInput = (e) => {
    setText(e.target.value);
    dispatch(keyCountAction(1));
  };
 
  return (
    <div id={styles.main}>
      <h1>Typing Master</h1>
      <Timer />
      <h1>Type this character:-{data}</h1>
      <textarea
        placeholder="type here"
        rows={20}
        cols={100}
        className={styles.textarea}
        onChange={handleInput}
        value={text}
      ></textarea>
      <button className={styles.button}>START</button>
    </div>
  );
};

export default Home;
