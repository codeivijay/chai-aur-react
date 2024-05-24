import { useState } from 'react'

import './App.css'

function App() {

  const [counter, setCounter] = useState(15)

  //let counter = 15
  const addValue = function() {
    //counter = counter + 1

  /*setCounter(counter + 1)
    setCounter(counter + 1)
    setCounter(counter + 1)
    setCounter(counter + 1) */

    // this is the situation with useState. as it sends these actions in batches and when it see it had to do same task 
    // 
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)

    //which accepts call back function by default.(hidden feature)
   
  }

  const removeValue = () => {
    if(counter <= 0) return
    setCounter(counter - 1)
  }

  return (
    <>
    <h1>Chai aur React</h1>
    <h2>Counter Value: {counter}</h2>

    <button onClick={addValue}>Add value {counter}</button>
    <br />
    <button onClick={removeValue}>Remove value</button>

   <p> footer : {counter}</p>
    </>
  )
}

export default App
