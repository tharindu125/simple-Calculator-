import React from 'react'
import { useState } from 'react'
import "../App.css"

export default function Form() {
  const [result, setResult] = useState('');

  const clickHandler = (event) => {
    setResult(result.concat(event.target.value));
  };

  const ClearDisplay = () => {
    setResult("");
  };

  const Calculate = () => {
    setResult
    (eval(result).toString());
  };

  
    let time = new Date().toLocaleTimeString();
    const [ctime, setCtime] = useState(time);

    const UpdateTime = () => {
      time = new Date().toLocaleTimeString();
      setCtime(time);
    };

    setInterval(UpdateTime, 1000);

  return (
    <div className='main'>
      <span>Simple Calculater </span>
      <marquee direction="right" behavior ="alternate">{ctime}</marquee>
      <div className='cal'>
        <input type="text" placeholder='0' id='answer' value={result}/>
        <input type="button" value={9} className="button" onClick={clickHandler}/>
        <input type="button" value={8} className="button" onClick={clickHandler}/>
        <input type="button" value={7} className="button" onClick={clickHandler}/>
        <input type="button" value={6} className="button" onClick={clickHandler}/>
        <input type="button" value={5} className="button" onClick={clickHandler}/>
        <input type="button" value={4} className="button" onClick={clickHandler}/>
        <input type="button" value={3} className="button" onClick={clickHandler}/>
        <input type="button" value={2} className="button" onClick={clickHandler}/>
        <input type="button" value={1} className="button" onClick={clickHandler}/>
        <input type="button" value={0} className="button" onClick={clickHandler}/>

        <input type='button' value="+" className='button' onClick={clickHandler}/>
        <input type="button" value="-" className="button" onClick={clickHandler}/>
        <input type="button" value="/" className="button" onClick={clickHandler}/>
        <input type="button" value="*" className="button" onClick={clickHandler}/>
        <input type="button" value="%" className="button" onClick={clickHandler}/>
        <input type="button" value="." className="button" onClick={clickHandler}/> 

        <input type="button" value="clear" className="button1" onClick={ClearDisplay}/>
        <input type="button" value="=" className="button1" onClick={Calculate}/>
      </div>
      
    </div>
  )
}
