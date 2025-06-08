import { useState, Suspense } from 'react'
import fetchUser from './utils/fetch.ts'
import ViewUser from './components/ViewUser.tsx'
//import { User } from './components/ViewUser.tsx'
import './App.css'

function App() {
  const [user, setUser] = useState(Object);

  async function handleFind() {
    const input: HTMLInputElement = document.getElementById("input") as HTMLInputElement;
    const value: string = input.value;
    try {
      const user: object = await fetchUser(value);
      setUser(user)
    } catch (error) {
      console.log(error);
      setUser({error});
    }
  }

  return (
    <>
      <div className="interaction">
        <label htmlFor="input">username: </label>
        <input id="input" onKeyDown={(e) => e.key === "Enter" && handleFind()}/>
        <button onClick={handleFind}>Find</button>
      </div>
      <Suspense fallback={<h1>Loading...</h1>}>
      <ViewUser data={user}/>
      </Suspense>
    </>
  );
}

export default App
