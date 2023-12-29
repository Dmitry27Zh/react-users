import { useEffect, useState } from 'react'
import './App.css'
import Users from './components/Users'
import Success from './components/Success'

function App() {
  const [users, setUsers] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    fetch('https://reqres.in/api/users')
      .then((res) => res.json())
      .then((data) => setUsers(data.data))
      .catch((err) => {
        console.warn(err)
        alert('Error')
      })
      .finally(() => setIsLoading(false))
  }, [])

  return (
    <div className="App">
      <Users users={users} isLoading={isLoading} />
      {/* <Success /> */}
    </div>
  )
}

export default App
