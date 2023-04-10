import React from "react";
// import {users} from '../data/user';
import { useState, useEffect} from 'react';


const SearchBar = () => {
  const [search, setSearch] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers(() => search);
  }, [search]); 


  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const filteredProfiles= users.filter((user) => 
  user.toLowerCase().includes(search.toLowerCase()));

    
  return (
    <div className="inputElem">
      
      <input type="text" placeholder="Search by name..." value={search} onChange={handleSearch} />
      <ul>
       {filteredProfiles}
      </ul>
    
    </div>
  );
}


export default SearchBar;


// .map((user) => (
          //   <li key={user.id}>{user.firstname}</li>
          //)
         // )