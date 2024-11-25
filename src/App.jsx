import { useState } from 'react'
import { getDatabase, ref, onValue } from 'https://www.gstatic.com/firebasejs/11.0.2/firebase-database.js'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import firebaseApp from '../firebase.config';

function App() {

  const [count, setCount] = useState(0)
  
  const db = getDatabase(firebaseApp);

  const dbRef = ref(db, 'todos');
  
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
