import React, { useState } from 'react'

export default function TextForm() {
  const HandleUpCase=()=>{
          let newText=Text.toUpperCase();
          setText(newText);
  }
  const HandleLowCase=()=>{
    let newText=Text.toLowerCase();
    setText(newText);
}

  const Handleevent=(event)=>{
    setText(event.target.value);
}

  const[Text,setText]=useState("Enter your text here");
  return (
    <div className="container mb-3">
      <h1>ENTER YOUR TEXT BELOW</h1>
      <div className="mb-3">
        <textarea className="form-control" value={Text} onChange={Handleevent} id="exampleFormControlTextarea1" rows="10"></textarea>
      </div>
      <button className="btn btn-primary " onClick={HandleUpCase}>UPPERCASE</button> 
      <button className="btn btn-primary ms-3 " onClick={HandleLowCase}>LOWERCASE</button> 
    </div>
  )
}
