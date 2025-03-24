import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [users, setUsers] = useState<{
    id: number;
    email:string;
  }[] | null>(null)

  const [count, setCount] = useState(0)

useEffect(()=>{
  fetch(`${import.meta.env.VITE_API_HOST}:${import.meta.env.VITE_API_PORT}/api/user`).then(response => response.json()).then((users)=>{
    console.log(users);

    return users;
  }).then((users)=>{
    setUsers(users);
  })
},[])

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

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>

      <h2>Remote users</h2>
      {users?.map((user)=>(
        <article key={user.id}>
          <h3>{user.email}</h3>
        </article>
      ))}
    </>
  )
}

export default App
