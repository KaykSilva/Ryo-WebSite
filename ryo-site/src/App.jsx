import { useState } from 'react'
import RouterApp from "../src/routes/router"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <RouterApp/>
    </>
  )
}

export default App
