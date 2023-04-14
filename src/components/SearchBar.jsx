import React from 'react';
import { users } from '../data/user';
import { useState } from 'react';

const SearchBar = ({setFilteredProfile}) => {
  const [search, setSearch] = useState('');

  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearch(query);
    setFilteredProfile(
      users.filter((user) =>
        user.firstName.toLowerCase().includes(query.toLowerCase())
      )
    );
  };

  return (
    <div className="inputElem">
      
      <input
        type="text"
        placeholder="Search by name..."
        value={search}
        onChange={handleSearchChange}
      />
    </div>
  );
};

export default SearchBar;



























