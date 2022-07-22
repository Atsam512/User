import React, { useRef, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

const App=()=>{

  const[myNum , setMyNum] = useState(0);

  const inputOne = useRef();
  const inputTwo = useRef();

  const setNumValue =()=>{
    console.log("Hello from SetNum fun");
    console.log(inputOne.current);
    inputOne.current.style.width = "400px"
  }

  const setTextValue=()=>{
    console.log("Hello from SetText fun");
    console.log(inputTwo.current);
    
   
  }
  

  return(
    <>
    <h1>useRef Hook</h1>
    <input type="number" ref={inputOne} value={myNum} onChange={(e)=>setMyNum(e.target.value)} style={{width: '100px'}} />

    <input type="text" ref={inputTwo} value={myNum} />

    <h3>Value is : {myNum}</h3>

    <button onClick={setNumValue}>Rupees</button>
    <button onClick={setTextValue}>Dollars</button>
    </>
    
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
