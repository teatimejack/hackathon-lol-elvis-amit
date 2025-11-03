import { useState, useRef } from 'react'
import './App.css'
import Login from "./pages/Login"



function App() {

  const numberOf = useRef(null)
  const [count, setCount] = useState(0)

  function name(params) {
    numberOf.current = fi
  }
  return (
    <>
      <LogIn />
    </>
  )
}

export default App
