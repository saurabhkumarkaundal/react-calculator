import React,{useState} from "react";
import "./style.css";

export default function App() {
  const[val,setval]=useState("");
  const clear=()=>{
    setval("");
  }
  const backspace=()=>{
    if(val==""){
      setval("Click AC");
    }
    else{
      setval(val.slice(0,-1));
    }
  }
  const evaluate=()=>{
    setval(eval(val));
  }
  return (
    <div className="Claculator">
      <input type="text" className="result" value={val} readOnly></input>
      <button onClick={()=>clear()}> AC </button>
      <button onClick={()=>backspace()}> DEL </button>
      <button value="1" onClick={(e)=>setval(val + e.target.value)}> 1 </button>
      <button value="2" onClick={(e)=>setval(val + e.target.value)}> 2 </button>
      <button value="3" onClick={(e)=>setval(val + e.target.value)}> 3 </button>
      <button value="/" onClick={(e)=>setval(val + e.target.value)}> / </button>
      <button value="4" onClick={(e)=>setval(val + e.target.value)}> 4 </button>
      <button value="5" onClick={(e)=>setval(val + e.target.value)}> 5 </button>
      <button value="6" onClick={(e)=>setval(val + e.target.value)}> 6 </button>
      <button value="*" onClick={(e)=>setval(val + e.target.value)}> * </button>
      <button value="7" onClick={(e)=>setval(val + e.target.value)}> 7 </button>
      <button value="8" onClick={(e)=>setval(val + e.target.value)}> 8 </button>
      <button value="9" onClick={(e)=>setval(val + e.target.value)}> 9 </button>
      <button value="-" onClick={(e)=>setval(val + e.target.value)}> - </button>
      <button value="+" onClick={(e)=>setval(val + e.target.value)}> + </button>
      <button value="0" onClick={(e)=>setval(val + e.target.value)}> 0 </button>
      <button value="." onClick={(e)=>setval(val + e.target.value)}> . </button>
      <button value="=" onClick={()=>evaluate()}> = </button>
    </div>
  );
}