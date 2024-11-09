import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {

  const [user, setUser] = useState({  name: '', music: ''})
  const [error, setError] = useState(false)
  
  const [comment, setComment] = useState([]);


  const handlerSubmit = (e) => {
    e.preventDefault();
    const regexNum = /[0-9]/; 

    if (user.name.trim().length >= 3 && 
    user.music.trim().length >= 6 && 
    !regexNum.test(user.name)) {
      setError(false);
      setComment([...comment, user]);
      setUser({ name: "", music: "" });
    } else {
      setError(true);
      
    }

  }

  console.log(user);
  
  return (
    <div>
      <h3 className="title">Mi musica favorita </h3>
      <form onSubmit={handlerSubmit}>
        <label>Nombres:</label>
        <input
          type="text"
          value={user.name}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />

        <label>Tu musica favorita:</label>
        <input
          type="text"
          value={user.music}
          onChange={(e) => setUser({ ...user, music: e.target.value })}
        />

        <button>Comentar</button>

        {error && (
          <p style={{ color: "red" }}>
            Por favor chequea que la información sea correcta
          </p>
        )}
      </form>

      {comment.map((user, index) => (
        <Card key={index} user={user} />
      ))}
    </div>
  );
}

export default App
