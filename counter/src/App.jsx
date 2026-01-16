import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15);
  // let counterValue = 5;  not going to update in UI

  function addValue() {

    if (counter < 20) {
      counter = counter + 1;
      setCounter(counter)
      console.log("clicked", counter);
    }


  }
  function subtractValue() {
    if (counter > 0) {
      counter = counter - 1;
      setCounter(counter)
      console.log("clicked", counter);
    }

  }

  return (
    <>
      <h1>Chai and React</h1>
      <h2>Counter Value: {counter}</h2>

      <button
        onClick={addValue}
      >Increment by 1</button>
      <br />
      <br />
      <button
        onClick={subtractValue}
      >Decrement by 1</button>
    </>
  )
}

export default App
