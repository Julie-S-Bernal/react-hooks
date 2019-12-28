import React, { useState, useEffect } from 'react'

const App = () => {
  // classes always require to be objects but functions do not
  const [count, setCount] = useState(0)
  const [isOn, setIsOn ] = useState(false)
  const [mousePosition, setMousePosition] = useState({x: null, y: null})

  // As such will run after each re-render
  useEffect(() => {
    document.title = `You have click ${count} times`
    window.addEventListener('mousemove', handleMouseMove)

    // In order to clean up a side effect we can add a return at the end of our useEffect function
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
    // 1/we need to specifiy count here as the side effects rellies on it. Otherwise our title
    // will not update anymore
    // 2/To prevent useEffect to always run we can usse an array of value as bellow.
  }, [count]);

// USE STATE
//   const incrementCount = () => {
//       setCount(count + 1 )
//   }

 // USE PREVIOUS STATE

 const handleMouseMove = event => {
     setMousePosition({
         x: event.pageX,
         y: event.pageY
     })
 }

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

      <h2>Mouse Position</h2>
      {JSON.stringify(mousePosition, null, 2)}
      <br />
    </>
  )
};

export default App;
