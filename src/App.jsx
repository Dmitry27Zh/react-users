import { useEffect, useState } from 'react'
import './App.css'
import Users from './components/Users'
import Success from './components/Success'

function App() {
  const [users, setUsers] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [invites, setInvites] = useState([])
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
  const handleSearch = (e) => {
    setSearch(e.target.value)
  }
  const handleInvite = (id) => {
    if (invites.includes(id)) {
      setInvites((prevState) => prevState.filter((invitedId) => invitedId !== id))
    } else {
      setInvites((prevState) => [...prevState, id])
    }
  }

  return (
    <div className="App">
      <Users
        users={users}
        isLoading={isLoading}
        search={search}
        onSearch={handleSearch}
        invites={invites}
        onInvite={handleInvite}
      />
      {/* <Success /> */}
    </div>
  )
}

export default App
