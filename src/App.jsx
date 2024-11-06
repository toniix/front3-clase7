import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  
  const [error, setError] = useState(false)

  const handlerSubmit = (e) => {
    e.preventDefault()
    
  }
  return (
      <div>
        <h3>Carga de estudiantes</h3>
        <form onSubmit={handlerSubmit} >
          <label>Nombres</label>
          <input type="text"  />
          <label>Apellidos</label>
          <input type="text"  />
          <label>Edad</label>
          <input type="text" />
          <button type="submit">Cargar</button>
        </form>
        <Card />
      </div>
    
  )
}

export default App
