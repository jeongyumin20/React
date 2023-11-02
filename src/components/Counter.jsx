// Counter.jsx (src)
import React, {useState} from "react";

export default function Counter({onClick, totalCount}){
  const [count, setCount] = useState(0);

//  const increment = (event) => {
//    setCount(count + 1);
//  }
  
  function increment() {
    setCount(count => count + 1);
  }

  return(
    <div>
      <span className="number">{count} / <span className="total">{totalCount}</span></span>
{/*       <button className="button" onClick={() => {
        increment();
        increment();
        increment();
      }}>Add +3</button> */}
      <button className="button" onClick={() => {
        increment();
        onClick();  
      }}>Add +1</button>
    </div>
  );
}