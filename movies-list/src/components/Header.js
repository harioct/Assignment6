import React from "react";
import Search from "./Search";

const Header = ({ title, onSearch }) => {
  return (
    <header className="app-header">
      <h1>{title}</h1>
      <Search onSearch={onSearch} />
    </header>
  )
}

export default Header;
