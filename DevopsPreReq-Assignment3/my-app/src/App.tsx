/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount]= useState(0)
  const changeCount=(check:string)=>{
    if(check==="I")
    {
      setCount(count+1);
    }
    else
    {
      setCount(count-1);
    }

  }
  return (
    <div className="App">
    
     <h1>Counter</h1>
     <div style={{display:'flex',alignItems:'center',marginLeft:'48%'}}>
       <button onClick={()=>changeCount("I")} style={{height:'40px',width:'40px',fontWeight:'bold'}}>+</button> <h1>{count}</h1> <button onClick={()=>changeCount("D")} style={{height:'40px',width:'40px',fontWeight:'bold'}}>-</button></div> 
    </div>
  );
}

export default App;
