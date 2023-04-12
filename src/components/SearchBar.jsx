import React from "react";
// import {users} from '../data/user';

// import { useState} from 'react';



// import React, { useState } from "react";
// import { users } from '../data/user';

// const SearchBar = () => {
//   const [search, setSearch] = useState("");
  
//   const handleSearch = (event) => {
//     setSearch(event.target.value);
//   };
  
//   const filteredProfiles = users.filter((user) => {
//     const fullName = `${user.firstName} ${user.lastName}`;
//     return fullName.toLowerCase().includes(search.toLowerCase());
//   });
const SearchBar = ()=>{
  return (
    <div className="inputElem">
      <input type="text" placeholder="Search by name..." />
      {/* value={search} onChange={handleSearch} /> */}
    
    {/* <ul>
      {/* {filteredProfiles} */}
    {/* </ul> } */}
    
     </div>
  );
}
// 
export default SearchBar;



//////////////////////////////////////




































// const SearchBar = () => {
//   const [search, setSearch] = useState("");
//   const [profiles, setProfiles] = useState([users]);



//   const handleSearch = (event) => {
//     setSearch(event.target.value);
//   };



 // ***********************************************8888
  // const filteredProfiles = users.filter((users)=>
  // users.firstName.toLowerCase().includes(search.toLowerCase()));
  // setProfiles(filteredProfiles)
//***********************************
//   const filteredProfiles = users?.filter((user) => {
//   user?.firstName.toLowerCase().includes(search.toLowerCase())
// // return user?.firstName === search  
// }
//   );

  // useEffect(() => {
  //   setUsersList(search);
  // }, [search]); 
  //  ***************************** 
  // return (
  //   <div className="inputElem">
      
  //     <input type="text" placeholder="Search by name..." value={search} onChange={handleSearch} />
  //     <ul>
  //      {/* {filteredProfiles}
  //      {UserProfile} */}
  //     </ul>
    
  //   </div>
  // );
// }


// export default SearchBar;


// const SearchBar = ({ users }) => {
//   const [search, setSearch] = useState("");
//   const [filteredProfiles, setFilteredProfiles] = useState(users);

//   const handleSearch = (event) => {
//     const searchTerm = event.target.value;
//     setSearch(searchTerm);
//     const filteredProfiles = users.filter((user) =>
//       user.firstName.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//     setFilteredProfiles(filteredProfiles);
//   };

//   return (
//     <div className="inputElem">
//       <input
//         type="text"
//         placeholder="Search by name..."
//         value={search}
//         onChange={handleSearch}
//       />

//       <ul>
//         {filteredProfiles.map((user) => (
//           <li key={user.id}>{user.firstName}</li>
//         ))}
       
//       </ul>
//     </div>
//   );
// };

// export default SearchBar;


