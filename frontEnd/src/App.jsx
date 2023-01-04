import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import './App.css'
import Landing from './components/landing/Landing'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Landing/>
    </div>
  )
}

export default App
