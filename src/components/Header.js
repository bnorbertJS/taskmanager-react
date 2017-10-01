import React from "react";

import SearchBar from "./SearchBar";

const Header = (props) => {
  return(
    <div className="jumbotron header">
      <h2>TaskManager Sample</h2>
      <p>This is a taskmanager application meant to practise ReactJS</p>
      <hr className="my-4"/>
      <div className="search-bar-container mx-auto">
        <SearchBar onAddTask={props.onAddTask}/>
      </div>
    </div>
  );
}

export default Header;
