import React from "react";
import SearchBar from "./SearchBar";
import UserProfile from "./UserProfile";
import "../styles/wrapper.css";

const Wrapper = () => {
  return (
    <>
      <div className="container">
        <SearchBar />
        <UserProfile />
      </div>
    </>
  );
};

export default Wrapper;
