import { useState, useEffect } from "react";
import './styles.css';
import UserCard from "./UserCard";




export default function GitHubProfileFinder () {
  const [username, setUsername] = useState('vjimenez327')
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(false); 

  function handleSubmit(e) {
    fetchGithubUserData()
  }

  async function fetchGithubUserData(){
    setLoading(true);
    console.log({username})
    const res = await fetch(`https://api.github.com/users/${username}`)
    const data = await res.json()
      console.log(data)

      if(data) {
        setUser(data)
        setLoading(false)
        setUsername('')
      }
  }

  useEffect(() => {
    fetchGithubUserData()
  }, [])

  if(loading) {
    return <h1>Loading data...</h1>
  }

  console.log({user})

  return (
    <div className="profile-container">
      <div className="profile-wrapper">
        <input 
          name="profile-search"
          type="text"
          placeholder="Search username"
          value={username}
          onChange={(e)=> setUsername(e.target.value)}
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>
        {user !== null ? <UserCard user={user} />: null}
    </div>
  )
}