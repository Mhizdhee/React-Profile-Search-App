import React, { useState } from "react";
import SearchBar from "./SearchBar";
import UserProfile from "./UserProfile";
import { users } from "../data/user";
import "../styles/wrapper.css";

const Wrapper = () => {
  const [usersList, setUsersList] = useState(users)
  return (
    <>
      <div className="container">
        <SearchBar setFilteredProfile={setUsersList} />
        <UserProfile users={usersList} />
      </div>
    </>
  );
};

export default Wrapper;
