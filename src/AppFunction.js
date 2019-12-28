import React, { useState } from 'react'

const App = () => {
  // classes always require to be objects but functions do not
  const [count, setCount] = useState(0)
  const [isOn, setIsOn ] = useState(false)

// USE STATE
//   const incrementCount = () => {
//       setCount(count + 1 )
//   }

 // USE PREVIOUS STATE

  const incrementCount = () => {
      setCount(prevCount => prevCount + 1 )
  }

  const toggleLight = () => {
    setIsOn(prevIsOn => !prevIsOn)
  }


return (
<>
  <h2>Counter</h2>
  <button onClick={incrementCount}>
    I was clicked {count} times
  </button>
  <h2>Toggle Light</h2>
  <img
    src={
        isOn 
        ? 'https://icon.now.sh/highlight/fd0'
        : 'https://icon.now.sh/highlight/aaa'
    }
    style={{
      height:'50px',
      width: '50px',
    }}
    alt='Flashlight'
    onClick={toggleLight}
  />
</>
)

};

export default App;
