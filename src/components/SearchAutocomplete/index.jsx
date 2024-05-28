import { useEffect, useState } from "react";
const URL = 'https://dummyjson.com/users';




export default function SearchAutocomplete(){
  const [loading, setLoading] = useState(false)
  const [users, setUsers] = useState([])
  const [search, setSearch] = useState('')
  const [showDropdown, setShowShowDropdown] = useState(false);
  const [filteredUsers, setFilteredUsers] = useState([])
  

  async function fetchUsers(){
    try {
      setLoading(true)
      const response = await fetch(URL);
      const data = await response.json();

      if(data && data.users.length) {
        setUsers(data.users.map(user => user.firstName))
        setLoading(false)
      }
    } catch(e) {
        console.log(e)
        setLoading(false) }
  }

  function handleInput(e) {
    const query = e.target.value.toLowerCase()
    setSearch(query)

    if(query.length > 1) {
      const filteredUsers = users.filter(u => u.toLowerCase().indexOf(query) > -1)

      setFilteredUsers(filteredUsers)
      setShowShowDropdown(true)
    } else{
      setShowShowDropdown(false)
    }
  }

  function handleUser(e){
    let userInfo = e.target.innerText;
    setShowShowDropdown(false)
    setSearch(userInfo)

  }

  console.log(filteredUsers)
  useEffect(() => {
    fetchUsers();
  }, [])

  if(loading) {
    return <div>Loading....</div>
  }

  return(
    <div>
      <div>Try the Search Autocomplete </div>
      <input 
      type="text"
      placeholder="Search for User"
      value={search}
      onChange={handleInput}
      />
        {

          showDropdown ? 

          filteredUsers.map((user, i) => <div key={i} onClick={handleUser}>{user}</div>) :

          users && users.length ?
          users.map((user, i) => <p key={i}>{user}</p>) 
          // users
        : null
        } 
    
    </div>
  )
}