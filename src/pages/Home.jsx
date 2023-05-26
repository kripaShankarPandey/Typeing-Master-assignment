import React, { useState } from 'react'
import styles from"./Home.module.css"
import Timer from '../components/Timer'
const Home = () => {
    const str=["a","s","d","f","j","k","l",";"]
    const [data,setData]=useState(str[0])
    const [count,setCount]=useState(0)
    const [text,setText]=useState("")

    const handleInput=(e)=>{
        let a=Math.floor(Math.random()*str.length);
        setData(str[a]);
        setText(e.target.value)
        if(text[text.length-1]===str[a]){
            setCount((prev)=>prev+1)
        }
        console.log(text[text.length-1],str[a])
    }
  return (
    <div id={styles.main}>
        <h1>Typing Master</h1>
        <Timer/>
        <h1>{data}</h1>
        <textarea placeholder='type here' rows={20} cols={100} className={styles.textarea} onChange={handleInput} value={text}></textarea>
        <button className={styles.button}>START</button>
    </div>
  )
}

export default Home