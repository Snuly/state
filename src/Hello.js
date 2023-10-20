import { useState } from "react";

function useInput({ type /*...*/ }) {
    const [value, setValue] = useState("");
    const input = <input value={value} onChange={e => setValue(e.target.value)} type={type} />;
    return [value, input];
  }


function Hello() {
    const [ratioChange, setRatioChange] = useInput({ type: "text" });

  
    function handleRatioChange(event) {
      setRatioChange(event.target.value)
    }
  
    return (
      <div className="App">
        <input type="text" value={ratioChange} onChange={handleRatioChange}></input>
        <h1>Hello {ratioChange}!</h1>
      </div>
    );
  }

  export default Hello;