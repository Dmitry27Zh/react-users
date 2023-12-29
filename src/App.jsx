import { useEffect, useState } from 'react'
import './App.css'
import Users from './components/Users'
import Success from './components/Success'

function App() {
  const [users, setUsers] = useState([])
  useEffect(() => {
    fetch('https://reqres.in/api/users')
      .then((res) => res.json())
      .then((data) => setUsers(data.data))
      .catch((err) => {
        console.warn(err)
        alert('Error')
      })
  }, [])

  return (
    <div className="App">
      <Users users={users} isLoading />
      {/* <Success /> */}
    </div>
  )
}

export default App
