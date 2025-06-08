import { useState } from 'react'
import fetchUser from './utils/fetch.ts'
import ViewUser from './components/ViewUser.tsx'
import './App.css'

function App() {
  const [user, setUser] = useState(null)

  async function handleFind() {
    const input: HTMLInputElement = document.getElementById("input");
    let value: String = input.value;
    let user: object = await fetchUser(value);
    setUser(user)
  }

  return (
    <>
      <div className="interaction">
        <label htmlFor="input">username: </label>
        <input id="input" />
        <button onClick={handleFind}>Find</button>
      </div>
      {user && <ViewUser data={user}/>} 
    </>
  );
}

export default App
