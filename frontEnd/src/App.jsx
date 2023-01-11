import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import './App.css'
import Landing from './components/landing/Landing'
import Hotels from './components/hotels/hotels'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Hotels/>
    </div>
  )
}

export default App
