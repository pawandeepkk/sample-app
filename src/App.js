import './App.css';
import {useEffect, useState} from 'react'

function App() {

  const [firstNum, setFirstNum] = useState(3)
  const [secondNum, setSecondNum] = useState(0)

  let normalVar = 5

  useEffect(() => {
    console.log('inside use effect hook')
    // mostly used for back end calls
    if (firstNum.length > 5) {
      console.log('error')}
  }, [firstNum])

  return (
    <div className="App">
      
    <p>First number</p>
    <input value={firstNum} onChange={(e) => setFirstNum(e.target.value)} type='text' />

    <p>Second number</p>
    <input type='text' />

    <button onClick={() => setFirstNum(firstNum+1)}>Calculate</button>
    <button onClick={() => {
      normalVar = normalVar + 1
      console.log('normalVar', normalVar)
      }}
      >Calculate</button>

    <p>First Number: {firstNum}</p>
    <p>Normal Variable: {normalVar}</p>

    </div>
  );
}

export default App;
