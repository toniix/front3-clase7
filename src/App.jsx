import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div>
        <h1>Carga de estudiantes</h1>
        <form >

        </form>
        <Card />
      </div>
    
  )
}

export default App
