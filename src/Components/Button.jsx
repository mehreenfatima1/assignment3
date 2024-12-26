import React, { useState } from 'react';

const Button = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const titleCase = () => {
    setOutput(
      input
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) 
        .join(" ") 
    );
  
  };
  const upperCase=()=>{
    setOutput(
      input.toUpperCase()
    )
  }
  const lowerCase=()=>{
    setOutput(
      input.toLowerCase()
    )
  }
  const reset=()=>{
    setInput("");
    setOutput("");
  }

  return (
    <>
    <div className='container'>
      <input 
        type="text" 
        name="text" 
        placeholder="Enter the text" 
        onChange={handleInput} 
        value={input}
      />
      <button onClick={titleCase}>Title Case</button>
      <button onClick={lowerCase}>Lower Case</button>
      <button onClick={upperCase}>Upper Case</button>
      <button onClick={reset}>Reset</button>
      <div className="inputResult">
        <h3>Your Result</h3>
        <p id="result">{output}</p>
      </div>
      </div>
    </>
  );
};

export default Button;
