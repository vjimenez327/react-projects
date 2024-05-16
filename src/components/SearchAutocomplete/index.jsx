import { useEffect, useState } from "react";


export default function SearchAutocomplete(){
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [searchParam, setSearchParam] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const [filteredUsers, setFilteredUsers] = useState([])


function handleChange(event){
  const query = event.target.value.toLowerCase()
  setSearchParam(query)

  if(query.length > 1){
    const filteredData = users && users.length ? 
    users.filter(item => item.toLowerCase().indexOf(query) > -1)
    : [];

    setFilteredUsers(filteredData);
    setShowDropdown(true)
  } else {
    setShowDropdown(false)
  }
}

  async function fetchUsers(){
    try {
      setLoading(true)
      const response = await fetch('https://dummyjson.com/users');
      const { users } = await response.json() || [];

      if(users && users.length){
        setUsers(users.map(user => user.firstName));
        setLoading(false)
      }
    } catch (e) {
      console.error(e)
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchUsers();
  }, [])

  if(loading){
    return <div>Loading....</div>
  } 
  
  console.log(users, filteredUsers)

  return (
    <div className="search-autocomplete-container">
      <input 
      name="search-users"
      placeholder="Search Users here..."
      value={searchParam}
      onChange={handleChange}
      />

      {
        showDropdown ? filteredUsers.map((user, i) => <p key={i}>{user}</p>) : null
      }
      
    
      </div>
  )
}