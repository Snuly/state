import { useState } from "react";

// Uztaisi pogu, kas pamazina vērtību
// par 1.

// Pieliec, ka pieskaitīt var nevis 1,
// bet lietotāja ierakstītu ratio

function App() {
  const [result, setResult] = useState(0);

  function addRatio() {
    setResult(result + 1);
    console.log("Funkcija izsaukta");
    console.log("result ir " + result);
  }

  return (
    <div className="App">
      <button onClick={addRatio}>GANG +1 ratio</button>
      <h1>{result}</h1>
    </div>
  );
}

export default App;
